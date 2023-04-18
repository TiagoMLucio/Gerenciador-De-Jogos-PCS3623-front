export interface CreateGameDTO {
    jogo_id: string;
    nome_jogo: string;
    preco: number;
    tamanho: number;
    dev_id: string;
    data_lanc: string;
    categoria: string;
    descricao: string;
    capa: string;
}

type Game = CreateGameDTO & {
    quant_downloads?: number;
    curtidas?: number;
    curtida?: number;
    tempo_jogado?: number;
};

export default Game;
