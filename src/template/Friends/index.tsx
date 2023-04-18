import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import Header from 'components/Header';
import UserCard from 'components/UserCard';
import React, { useState } from 'react';
import useAuth from 'hooks/useAuth';
import * as S from './styles';

const UserFriendsTemplate = () => {
    const [search, setSearch] = useState('');

    // eslint-disable-next-line no-console
    console.log(search);

    const { user } = useAuth();

    return (
        <S.Container>
            <Header currentPage="friends" wallet={user.carteira} />
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
                    <S.SubTitle>Amigos</S.SubTitle>
                    <S.Users>
                        <UserCard
                            name="Parry"
                            image=" "
                            friendDate="20/03/2018"
                        />
                        <UserCard
                            name="Pedro"
                            image=" "
                            friendDate="20/03/2018"
                        />
                        <UserCard
                            name="Hess"
                            image=" "
                            friendDate="20/03/2018"
                        />
                        <UserCard
                            name="Pedrin"
                            image=" "
                            friendDate="20/03/2018"
                        />
                        <UserCard
                            name="LucioT"
                            image=" "
                            friendDate="20/03/2018"
                        />
                    </S.Users>
                </S.MainContainer>
            </S.Wrapper>
        </S.Container>
    );
};

export default UserFriendsTemplate;
