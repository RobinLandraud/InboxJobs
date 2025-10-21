import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders
} from 'axios';

type AuthMode = 'jwt' | 'session';

interface RetriableInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
  url: string;
  headers: AxiosRequestHeaders;
}

type ErrorHandler = (
  error: AxiosError
) => Promise<any>;

class ErrorInterceptorManager {
  private errorHandlers: Map<number, ErrorHandler> = new Map<number, ErrorHandler>();
  private excludedRoutes: Set<string> = new Set<string>();

  constructor(client: AxiosInstance) {
    client.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => response,
      async (error: AxiosError): Promise<AxiosResponse<any>> => {
        const originalRequest = error.config as RetriableInternalAxiosRequestConfig;

        if (!originalRequest || originalRequest._retry || this.isExcluded(originalRequest.url)) {
          return Promise.reject(error);
        }

        const status: number | undefined = error.response?.status;
        originalRequest._retry = true;

        if (status && this.errorHandlers.has(status)) {
          const handler: ErrorHandler = this.errorHandlers.get(status)!;
          return handler(error);
        }

        return Promise.reject(error);
      }
    );
  }

  addHandler(status: number, handler: ErrorHandler): void {
    this.errorHandlers.set(status, handler);
  }

  removeHandler(status: number): void {
    this.errorHandlers.delete(status);
  }

  getHandler(status?: number): ErrorHandler | undefined {
    return status ? this.errorHandlers.get(status) : undefined;
  }

  hasHandler(status: number): boolean {
    return this.errorHandlers.has(status);
  }

  addExcludedRoute(route: string): void {
    this.excludedRoutes.add(route);
  }

  addExcludedRoutes(routes: string[]): void {
    routes.forEach((r) => this.excludedRoutes.add(r));
  }

  removeExcludedRoute(route: string): void {
    this.excludedRoutes.delete(route);
  }

  isExcluded(url: string): boolean {
    return this.excludedRoutes.has(url);
  }
}

class ApiClient {
  private client: AxiosInstance;
  private authMode: AuthMode;
  readonly errorManager: ErrorInterceptorManager;

  constructor(baseURL: string, authMode: AuthMode = 'jwt', token?: string) {
    this.authMode = authMode;
    this.client = axios.create({
      baseURL,
      withCredentials: authMode === 'session',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (authMode === 'jwt' && token) {
      this.setToken(token);
    }
    this.errorManager = new ErrorInterceptorManager(this.client);
  }

  // Gestion token si JWT
  setToken(token: string) {
    if (this.authMode !== 'jwt') {
      console.warn('setToken utilisé alors que authMode != jwt');
    }
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // GET sur une route spécifique
  async get<T>(route: string, params?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(route, { params });
    return response.data;
  }

  // POST avec payload
  async post<T>(route: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(route, data);
    return response.data;
  }

  // PUT pour update
  async put<T>(route: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(route, data);
    return response.data;
  }

  // PATCH pour update partiel
  async patch<T>(route: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.patch(route, data);
    return response.data;
  }

  // DELETE
  async delete<T>(route: string): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(route);
    return response.data;
  }

  async request<T>(config: InternalAxiosRequestConfig): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.client(config);
    return response;
  }
}

// Export singleton avec base URL de ton API
export const apiClient = new ApiClient("http://127.0.0.1:8000/api");
