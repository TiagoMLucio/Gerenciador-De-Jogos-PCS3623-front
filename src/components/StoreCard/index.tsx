import React from 'react';
import { Button } from '@mui/material';
import * as S from './styles';

export type StoreCardProps = {
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
    name,
    category,
    image,
    launchDate,
    downloads,
    likes,
    price = 0,
    hasBuyButton = true
}) => {
    return (
        <S.Game>
            <S.GameImageContainer>
                <S.GameImage
                    width="200px"
                    height="144px"
                    src="/images/csgo.jpg"
                />
            </S.GameImageContainer>
            <S.GameInfo>
                <S.GameInfoLeftWrapper>
                    <S.GameName>{name + image}</S.GameName>
                    <S.CategoryContainer>
                        <S.CategoryName>{category}</S.CategoryName>
                    </S.CategoryContainer>
                    <S.OtherGameInfo>Usuários: {downloads}</S.OtherGameInfo>
                    <S.OtherGameInfo>
                        Data de lançamento: {launchDate}
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
