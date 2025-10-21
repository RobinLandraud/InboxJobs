import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { apiClient } from "./api";

interface TokenResponse {
  access: string;
  refresh: string;
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

    init401Handler: (): void => {
        apiClient.errorManager.addHandler(401, async (error: AxiosError): Promise<any> => {
            const refreshToken = localStorage.getItem("refresh_token");
            if (!refreshToken) {
                authService.logout();
                return Promise.reject(error);
            }
            try {
                await authService.refreshToken();
                const access = localStorage.getItem("access_token");
                const originalRequest: InternalAxiosRequestConfig = error.config
                if (!access || !originalRequest) {
                    return Promise.reject(error);
                }
                originalRequest.headers["Authorization"] = `Bearer ${access}`;
                return apiClient.request(originalRequest);
            } catch (err) {
                authService.logout();
                return Promise.reject(err);
            }
        });
        apiClient.errorManager.addExcludedRoute('/token/refresh/');
    },
    
};
  