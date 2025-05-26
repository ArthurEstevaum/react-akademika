import { createContext } from 'react';

export const AuthContext = createContext<null | {
    login: (token: string, email: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
    email: string
}>(null)