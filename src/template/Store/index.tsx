import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import StoreCard from 'components/StoreCard';
import Header from 'components/Header';
import React, { useState } from 'react';
import * as S from './styles';

const UserStoreTemplate = () => {
    const [search, setSearch] = useState('');

    // eslint-disable-next-line no-console
    console.log(search);

    return (
        <S.Container>
            <Header currentPage="store" />
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
                        <StoreCard
                            category="FPS"
                            downloads={1000}
                            launchDate="17/08/2010"
                            likes={12432}
                            name="Counter Strike Global Offensive"
                            image=""
                        />
                        <StoreCard
                            category="FPS"
                            downloads={1000}
                            launchDate="17/08/2010"
                            likes={12432}
                            name="Counter Strike Global Offensive"
                            image=""
                        />
                        <StoreCard
                            category="FPS"
                            downloads={1000}
                            launchDate="17/08/2010"
                            likes={12432}
                            name="Counter Strike Global Offensive"
                            image=""
                        />
                        <StoreCard
                            category="FPS"
                            downloads={1000}
                            launchDate="17/08/2010"
                            likes={12432}
                            name="Counter Strike Global Offensive"
                            image=""
                        />
                    </S.Users>
                </S.MainContainer>
            </S.Wrapper>
        </S.Container>
    );
};

export default UserStoreTemplate;
