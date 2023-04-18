import React from 'react';
import { Button } from '@mui/material';
import GameService from 'services/GameService';
import * as S from './styles';

export type StoreCardProps = {
    conta_id: string;
    jogo_id: string;
    name: string;
    category: string;
    image: string;
    launchDate: string;
    downloads: number;
    likes: number;
    price: number;
    hasBuyButton?: boolean;
};

const StoreCard: React.FC<StoreCardProps> = ({
    conta_id,
    jogo_id,
    name,
    category,
    image,
    launchDate,
    downloads,
    likes,
    price = 0,
    hasBuyButton = true
}) => {
    const handleBuy = async () => {
        await GameService.buyGame({
            conta_id,
            curtida: 0,
            data_compra: new Date(),
            jogo_id,
            tempo_jogado: 0
        });
    };

    return (
        <S.Game>
            <S.GameImageContainer>
                <S.GameImage width="200px" height="144px" src={image} />
            </S.GameImageContainer>
            <S.GameInfo>
                <S.GameInfoLeftWrapper>
                    <S.GameName>{name}</S.GameName>
                    <S.CategoryContainer>
                        <S.CategoryName>{category}</S.CategoryName>
                    </S.CategoryContainer>
                    <S.OtherGameInfo>Usuários: {downloads}</S.OtherGameInfo>
                    <S.OtherGameInfo>
                        Data de lançamento:{' '}
                        {((d: string[]): string => `${d[2]}/${d[1]}/${d[0]}`)(
                            launchDate.split('T')[0].split('-')
                        )}
                    </S.OtherGameInfo>
                    <S.OtherGameInfo>Likes: {likes}</S.OtherGameInfo>
                </S.GameInfoLeftWrapper>
                {hasBuyButton && (
                    <S.GameInfoRightWrapper>
                        <S.Price>
                            R$ {price.toFixed(2).replace('.', ',')}
                        </S.Price>
                        <Button
                            size="medium"
                            sx={{
                                width: '100px'
                            }}
                            variant="contained"
                            onClick={handleBuy}
                        >
                            Comprar
                        </Button>
                    </S.GameInfoRightWrapper>
                )}
            </S.GameInfo>
        </S.Game>
    );
};

export default StoreCard;
