import { AxiosResponse } from 'axios';

import Game, { CreateGameDTO } from 'interfaces/Game';
import api from './api';

interface BuyGame {
    conta_id: string;
    jogo_id: string;
    data_compra: Date;
    tempo_jogado: number;
    curtida: number;
}

export default class GameService {
    static async getGames(search: string): Promise<Game[]> {
        const response: AxiosResponse<Game[]> = await api.get(
            '/games/findByName/',
            { params: { nome_jogo: search } }
        );

        return response.data;
    }

    static async publish(data: CreateGameDTO): Promise<void> {
        await api.post('/games/create/', data);
    }

    static async getPublishedGames(id: string): Promise<Game[]> {
        const response: AxiosResponse<Game[]> = await api.get(
            `/games/findDevByMe/${id}`
        );

        return response.data;
    }

    static async getBoughtGames(id: string): Promise<Game[]> {
        const response: AxiosResponse<Game[]> = await api.get(
            `/bought_games/findMyGames/${id}`
        );

        return response.data;
    }

    static async buyGame(data: BuyGame): Promise<void> {
        await api.post(`/bought_games/create`, data);
    }
}
