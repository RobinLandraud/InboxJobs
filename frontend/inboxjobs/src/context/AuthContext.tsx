import React, { createContext, useState, useEffect, ReactNode, useRef } from "react";
import { authService } from "../services/authService";
import { apiClient } from "../services/api";

interface User {
    id: number;
    username: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    initialized: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        if (initialized) return;

        const token = localStorage.getItem("access_token");
        if (token) {
            apiClient.setToken(token);
            apiClient.get<User>("/me/")
            .then((user) => {
                setUser(user);
            })
            .catch(() => {
                setUser(null);
                authService.logout();
            })
            .finally(() => {
                setLoading(false);
                setInitialized(true);
            });
        } else {
            setLoading(false);
            setInitialized(true);
        }
    }, []);

    const handleLogin = async (username: string, password: string): Promise<void> => {
        setLoading(true);
        try {
            await authService.login(username, password);
            const userData = await apiClient.get<User>("/me/");
            setUser(userData);
        } catch (error) {
            setUser(null);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = (): void => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, initialized, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };