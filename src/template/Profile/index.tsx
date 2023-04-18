import GameCard from 'components/GameCard';
import { Edit, Logout } from '@mui/icons-material';
import Header from 'components/Header';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NewGameModal from 'components/NewGameModal';
import useAuth from 'hooks/useAuth';
import User from 'interfaces/User';
import GameService from 'services/GameService';
import StoreCard from 'components/StoreCard';
import Game from 'interfaces/Game';
import UserService from 'services/UserService';
import * as S from './styles';

const UserProfileTemplate = () => {
    const router = useRouter();
    const { user, logout } = useAuth();

    const [id, setId] = useState('');
    const [otherUser, setOtherUser] = useState<User | null>();
    const [games, setGames] = useState([] as Game[]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const curUser = otherUser ?? user;

    useEffect(() => {
        if (!router.isReady) return;
        setId(router.query.id as string);
    }, [router.isReady]);

    useEffect(() => {
        if (!id) return;
        const getOtherUser = async () => {
            const userById = await UserService.findById(id);
            userById && setOtherUser(userById);
        };
        getOtherUser();
    }, [id]);

    useEffect(() => {
        const getGames = async () => {
            const myGames = curUser.desenvolvedor
                ? await GameService.getPublishedGames(curUser.conta_id)
                : await GameService.getBoughtGames(curUser.conta_id);

            console.log(myGames);

            setGames(myGames);
        };
        getGames();
    }, [curUser.conta_id]);

    return (
        <S.Container>
            <Header currentPage="profile" wallet={user.carteira} />
            <S.Wrapper>
                <S.MainContainer>
                    <S.MainInfo>
                        <S.ImageContainer>
                            <S.ProfileImage
                                width="128px"
                                height="128px"
                                src={curUser.imagem_perfil}
                            />
                        </S.ImageContainer>
                        <S.Infos>
                            <S.Username>{curUser.nome_conta}</S.Username>
                            <S.Email>{curUser.email}</S.Email>
                        </S.Infos>
                    </S.MainInfo>
                    <S.ButtonGroup>
                        <Button
                            size="large"
                            fullWidth
                            variant="contained"
                            startIcon={<Edit />}
                        >
                            Editar dados da Conta
                        </Button>
                        <Button
                            size="large"
                            fullWidth
                            variant="contained"
                            onClick={() => {
                                logout();
                                router.push('/');
                            }}
                            startIcon={<Logout />}
                        >
                            Logout
                        </Button>
                    </S.ButtonGroup>
                    <S.Games>
                        <S.SubTitle>
                            <S.GamesTitle>
                                {curUser.desenvolvedor
                                    ? 'Jogos Publicados'
                                    : 'Biblioteca de Jogos'}
                            </S.GamesTitle>
                            {curUser.desenvolvedor === 1 &&
                                curUser.conta_id === user.conta_id && (
                                    <Button
                                        size="large"
                                        sx={{
                                            width: '200px'
                                        }}
                                        variant="contained"
                                        onClick={handleOpen}
                                    >
                                        Postar novo Jogo
                                    </Button>
                                )}
                            <NewGameModal
                                handleClose={handleClose}
                                open={open}
                                dev_id={user.conta_id}
                            />
                        </S.SubTitle>
                        {games.map(
                            ({
                                jogo_id,
                                nome_jogo,
                                preco,
                                data_lanc,
                                categoria,
                                capa,
                                quant_downloads,
                                curtidas,
                                tempo_jogado,
                                curtida
                            }) =>
                                curUser.desenvolvedor ? (
                                    <StoreCard
                                        conta_id=""
                                        jogo_id={jogo_id}
                                        category={categoria}
                                        downloads={quant_downloads as number}
                                        image={capa}
                                        launchDate={data_lanc}
                                        likes={curtidas as number}
                                        name={nome_jogo}
                                        price={preco}
                                        hasBuyButton={false}
                                    />
                                ) : (
                                    <GameCard
                                        category={categoria}
                                        name={nome_jogo}
                                        liked={curtida === 1}
                                        hours={tempo_jogado as number}
                                        image={capa}
                                    />
                                )
                        )}
                    </S.Games>
                </S.MainContainer>
            </S.Wrapper>
        </S.Container>
    );
};

export default UserProfileTemplate;
