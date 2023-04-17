import React from 'react';
import GameCard from '../../../components/GameCard';
import Header from '../../../components/Header';
import * as S from './styles';

const UserProfileTemplate = () => {
    return (
        <S.Container>
            <Header currentPage="profile" />
            <S.Wrapper>
                <S.MainContainer>
                    <S.MainInfo>
                        <S.ImageContainer>
                            <S.ProfileImage
                                width="128px"
                                height="128px"
                                src="/images/avatar.png"
                            />
                        </S.ImageContainer>
                        <S.Infos>
                            <S.Username>Username</S.Username>
                            <S.Email>Email</S.Email>
                        </S.Infos>
                    </S.MainInfo>
                    <S.Games>
                        <S.GamesTitle>Biblioteca de Jogos</S.GamesTitle>
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                        <GameCard
                            category="FPS"
                            name="Counter Strike Global Offensive"
                            liked={false}
                            hours={256}
                            image=""
                        />
                    </S.Games>
                </S.MainContainer>
            </S.Wrapper>
        </S.Container>
    );
};

export default UserProfileTemplate;
