import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import Header from 'components/Header';
import UserCard from 'components/UserCard';
import React, { useState } from 'react';
import useAuth from 'hooks/useAuth';
import * as S from './styles';

const UserCommunityTemplate = () => {
    const [search, setSearch] = useState('');

    // eslint-disable-next-line no-console
    console.log(search);

    const { user } = useAuth();

    return (
        <S.Container>
            <Header currentPage="community" wallet={user.carteira} />
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
                    <S.SubTitle>Usuários</S.SubTitle>
                    <S.Users>
                        <UserCard
                            id="teste"
                            hasFriendButton
                            name="Parry"
                            image=" "
                        />
                        <UserCard
                            id="teste"
                            hasFriendButton
                            name="Pedro"
                            image=" "
                        />
                        <UserCard
                            id="teste"
                            hasFriendButton
                            name="Hess"
                            image=" "
                        />
                        <UserCard
                            id="teste"
                            hasFriendButton
                            name="Pedrin"
                            image=" "
                        />
                        <UserCard
                            id="teste"
                            hasFriendButton
                            name="LucioT"
                            image=" "
                        />
                    </S.Users>
                </S.MainContainer>
            </S.Wrapper>
        </S.Container>
    );
};

export default UserCommunityTemplate;
