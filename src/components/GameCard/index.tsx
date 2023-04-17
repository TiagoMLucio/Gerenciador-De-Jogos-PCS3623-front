import { ThumbUpOffAlt, ThumbUpAlt } from '@mui/icons-material';
import React, { useState } from 'react';
import * as S from './styles';

export type GameCardProps = {
    name: string;
    category: string;
    hours: number;
    image: string;
    liked: boolean;
};

const GameCard: React.FC<GameCardProps> = ({
    name,
    category,
    hours,
    image,
    liked
}) => {
    const [curLiked, setCurLiked] = useState(liked);

    const toggleLiked = () => {
        setCurLiked(!curLiked);
    };

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
                    <S.OtherGameInfo>{hours} horas jogadas</S.OtherGameInfo>
                </S.GameInfoLeftWrapper>
                <S.GameInfoRightWrapper>
                    {curLiked ? (
                        <ThumbUpAlt
                            onClick={toggleLiked}
                            htmlColor="white"
                            fontSize="large"
                        />
                    ) : (
                        <ThumbUpOffAlt
                            onClick={toggleLiked}
                            htmlColor="white"
                            fontSize="large"
                        />
                    )}
                </S.GameInfoRightWrapper>
            </S.GameInfo>
        </S.Game>
    );
};

export default GameCard;
