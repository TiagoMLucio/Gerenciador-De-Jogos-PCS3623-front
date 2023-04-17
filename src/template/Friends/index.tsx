import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import Header from 'components/Header';
import UserCard from 'components/UserCard';
import React, { useState } from 'react';
import * as S from './styles';

const UserFriendsTemplate = () => {
    const [search, setSearch] = useState('');

    // eslint-disable-next-line no-console
    console.log(search);

    return (
        <S.Container>
            <Header currentPage="friends" />
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
                        <UserCard name="Parry" image=" " />
                        <UserCard name="Pedro" image=" " />
                        <UserCard name="Hess" image=" " />
                        <UserCard name="Pedrin" image=" " />
                        <UserCard name="LucioT" image=" " />
                    </S.Users>
                </S.MainContainer>
            </S.Wrapper>
        </S.Container>
    );
};

export default UserFriendsTemplate;
