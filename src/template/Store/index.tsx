import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import StoreCard from 'components/StoreCard';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import useAuth from 'hooks/useAuth';
import Game from 'interfaces/Game';
import GameService from 'services/GameService';
import * as S from './styles';

const UserStoreTemplate = () => {
    const [search, setSearch] = useState('');
    const [games, setGames] = useState<Game[]>([]);

    const { user } = useAuth();

    useEffect(() => {
        const getGames = async () => {
            const storeGames = await GameService.getGames(search);
            setGames(storeGames);
        };
        getGames();
    }, [search]);

    return (
        <S.Container>
            <Header currentPage="store" wallet={user.carteira} />
            <S.Wrapper>
                <S.MainContainer>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Search"
                        fullWidth
                        size="medium"
                        color="primary"
                        onChange={(e) => setSearch(e.target.value)}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        sx={{
                            input: {
                                color: '#fff'
                            },
                            '& label.Mui-focused': {
                                color: 'white'
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white'
                                }
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search htmlColor="white" />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <S.SubTitle>Jogos Encontrados</S.SubTitle>
                    <S.Users>
                        {games.map((game) => (
                            <StoreCard
                                conta_id={user.conta_id}
                                jogo_id={game.jogo_id}
                                category={game.categoria}
                                downloads={game.quant_downloads as number}
                                launchDate={game.data_lanc}
                                likes={game.curtidas as number}
                                name={game.nome_jogo}
                                image={game.capa}
                                price={game.preco}
                            />
                        ))}
                    </S.Users>
                </S.MainContainer>
            </S.Wrapper>
        </S.Container>
    );
};

export default UserStoreTemplate;
