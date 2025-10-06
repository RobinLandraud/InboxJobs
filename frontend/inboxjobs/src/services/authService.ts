import { InternalAxiosRequestConfig, AxiosError } from "axios";
import { apiClient } from "./api";

interface TokenResponse {
  access: string;
  refresh: string;
}

interface InternalAxiosRequestConfigWithRetry extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const authService = {
    login: async (username: string, password: string): Promise<void> => {
        const response = await apiClient.post<TokenResponse>('/token/', { username, password });

        const { access, refresh } = response;

        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);

        apiClient.setToken(access);
    },

    refreshToken: async (): Promise<void> => {
        const refresh = localStorage.getItem('refresh_token');
        if (!refresh) {
            throw new Error('No refresh token available');
        }
        
        const response = await apiClient.post<TokenResponse>('/token/refresh/', { refresh });
        const { access } = response;    
        localStorage.setItem('access_token', access);
        apiClient.setToken(access);
    },

    logout: (): void => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        //
    },

    initInterceptor: (): void => {
        apiClient.addInterceptor<any>(
            (response) => response,
            async (error: AxiosError): Promise<any> => {
                const originalRequest: InternalAxiosRequestConfigWithRetry | undefined = error.config;
                if (!originalRequest) {
                    return Promise.reject(error);
                }

                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const refreshToken = localStorage.getItem("refresh_token");
                    if (!refreshToken) {
                        authService.logout();
                        return Promise.reject(error);
                    }
                    try {
                        await authService.refreshToken();
                        originalRequest.headers["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
                        return apiClient['client'](originalRequest);
                    } catch (err) {
                        authService.logout();
                        return Promise.reject(err);
                    }
                }
                return Promise.reject(error);
            }
        );
    }
};
  