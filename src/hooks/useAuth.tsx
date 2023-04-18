import { destroyCookie, parseCookies } from 'nookies';
import React, { useContext, useState, createContext, useEffect } from 'react';

import api from 'services/api';

import UserService from 'services/UserService';

import { useRouter } from 'next/router';
import User from '../interfaces/User';

interface ILoginRequest {
    email: string;
    senha: string;
}

interface AuthContextData {
    user: User;
    login: (data: ILoginRequest) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState({} as User);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { '@gerenciadorjogos:useId': userId } = parseCookies();
            const myUser = await UserService.findById(userId);
            setUser(myUser as User);
        };
        getUser();
    }, []);

    const login = async (data: ILoginRequest) => {
        try {
            const response = await UserService.login(data);

            api.defaults.headers.common = {
                Authorization: `Bearer ${response.token}`
            };

            setUser(response.user);

            router.push('/perfil');
        } catch (error) {
            // eslint-disable-next-line no-alert, @typescript-eslint/no-explicit-any
            alert((error as any).response.data.message);
        }
    };

    const logout = () => {
        destroyCookie(undefined, '@gerenciadorjogos:token');
        destroyCookie(undefined, '@gerenciadorjogos:useId');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
