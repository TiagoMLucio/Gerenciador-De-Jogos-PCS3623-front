import { AxiosResponse } from 'axios';

import User from 'interfaces/User';
import { setCookie } from 'nookies';

import api from './api';

interface ILoginRequest {
    email: string;
    senha: string;
}

interface ILoginResponse {
    token: string;
    user: User;
}

interface IRegisterRequest {
    nome_conta: string;
    email: string;
    senha: string;
    desenvolvedor: boolean;
    imagem: string;
}

export default class UserService {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        const response: AxiosResponse<ILoginResponse> = await api.post(
            '/sessions/login',
            data
        );

        setCookie(undefined, '@gerenciadorjogos:token', response.data.token);
        setCookie(
            undefined,
            '@gerenciadorjogos:useId',
            response.data.user.conta_id
        );

        return response.data;
    }

    static async register(data: IRegisterRequest): Promise<void> {
        console.log(data);
        await api.post('/register', data);
    }

    static async findById(id: string): Promise<User | null> {
        const response: AxiosResponse<User[]> = await api.get(
            `/findById/${id}`
        );

        return response.data?.[0];
    }
}
