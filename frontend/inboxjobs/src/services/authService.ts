import { InternalAxiosRequestConfig, AxiosError, AxiosRequestHeaders } from "axios";
import { apiClient } from "./api";

interface TokenResponse {
  access: string;
  refresh: string;
}

interface RetriableInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
  url: string;
  headers: AxiosRequestHeaders;
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
                const originalRequest: RetriableInternalAxiosRequestConfig | undefined = error.config as RetriableInternalAxiosRequestConfig;

                if (!originalRequest || originalRequest._retry || originalRequest.url?.includes('/token/refresh/')) {
                    return Promise.reject(error);
                }

                const status = error.response?.status;
                originalRequest._retry = true;

                switch (status) {
                    case 401:
                        const refreshToken = localStorage.getItem("refresh_token");
                        if (!refreshToken) {
                            authService.logout();
                            return Promise.reject(error);
                        }
                        try {
                            await authService.refreshToken();
                            originalRequest.headers["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
                            return apiClient.request(originalRequest);
                        } catch (err) {
                            authService.logout();
                            return Promise.reject(err);
                        }
                    default:
                        return Promise.reject(error);
                }
            }
        );
    }
};
  