import { LogoutOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import * as S from './styles';

export type HeaderProps = {
    currentPage: string;
};

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
    const router = useRouter();

    return (
        <S.Wrapper>
            <S.Logo width="240px" height="160px" src="/images/logo.png" />
            <S.Pages>
                <S.Page
                    active={currentPage === 'store'}
                    onClick={() => {
                        currentPage !== 'store' && router.push('/user/store');
                    }}
                >
                    Loja
                </S.Page>
                <S.Page
                    active={currentPage === 'community'}
                    onClick={() => {
                        currentPage !== 'community' &&
                            router.push('/user/community');
                    }}
                >
                    Comunidade
                </S.Page>
                <S.Page
                    active={currentPage === 'friends'}
                    onClick={() => {
                        currentPage !== 'friends' &&
                            router.push('/user/friends');
                    }}
                >
                    Amigos
                </S.Page>
                <S.Page
                    active={currentPage === 'profile'}
                    onClick={() => {
                        currentPage !== 'profile' &&
                            router.push('/user/profile');
                    }}
                >
                    Perfil
                </S.Page>
            </S.Pages>
            <IconButton
                onClick={() => {
                    router.push('/');
                }}
                aria-label="logout"
                size="large"
            >
                <LogoutOutlined fontSize="inherit" htmlColor="black" />
            </IconButton>
        </S.Wrapper>
    );
};

export default Header;
