import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

type AuthMode = 'jwt' | 'session';

class ApiClient {
  private client: AxiosInstance;
  private authMode: AuthMode;

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
    };
  }

  // Gestion token si JWT
  setToken(token: string) {
    if (this.authMode !== 'jwt') {
      console.warn('setToken utilisé alors que authMode != jwt');
    }
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  addInterceptor<T>(
      onFulfilled?: (response: AxiosResponse<T>) => AxiosResponse<T> | Promise<AxiosResponse<T>>,
      onRejected?: (error: AxiosError) => Promise<AxiosResponse<T>> | Promise<never>
  ): void {
    this.client.interceptors.response.use(onFulfilled, onRejected);
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
}

// Export singleton avec base URL de ton API
export const apiClient = new ApiClient("http://127.0.0.1:8000/api");
