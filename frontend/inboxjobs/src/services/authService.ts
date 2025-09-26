import { apiClient } from "./api";

interface TokenResponse {
  access: string;
  refresh: string;
}

export const authService = {
    login: async (username: string, password: string): Promise<void> => {
        const response = await apiClient.post<TokenResponse>('/token', { username, password });

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
        
        const response = await apiClient.post<TokenResponse>('/token/refresh', { refresh });
        const { access } = response;    
        localStorage.setItem('access_token', access);
        apiClient.setToken(access);
    },

    logout: (): void => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        //
    }
};
  