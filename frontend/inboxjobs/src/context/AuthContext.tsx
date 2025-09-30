import React, { createContext, useState, useEffect, ReactNode } from "react";
import { authService } from "../services/authService";
import { apiClient } from "../services/api";

interface User {
    username: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            apiClient.setToken(token);
            apiClient.get<User>("/me").then(setUser).catch(() => {
                setUser(null);
                authService.logout();
            }).finally(() => { setLoading(false); });
        } else {
            setLoading(false);
        }
    }, []);

    const handleLogin = async (username: string, password: string): Promise<void> => {
        await authService.login(username, password);
        const userData = await apiClient.get<User>("/me");
        setUser(userData);
    };

    const handleLogout = (): void => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };