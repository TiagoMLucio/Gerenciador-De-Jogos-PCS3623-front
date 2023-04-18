import { LogoutOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import * as S from './styles';

export type HeaderProps = {
    currentPage: string;
    isDev?: boolean;
};

const Header: React.FC<HeaderProps> = ({ currentPage, isDev }) => {
    const router = useRouter();

    return (
        <S.Wrapper>
            <S.Logo width="240px" height="160px" src="/images/logo.png" />
            <S.Pages>
                {!isDev && (
                    <S.Page
                        active={currentPage === 'store'}
                        onClick={() => {
                            currentPage !== 'store' && router.push('/loja');
                        }}
                    >
                        Loja
                    </S.Page>
                )}
                <S.Page
                    active={currentPage === 'community'}
                    onClick={() => {
                        currentPage !== 'community' &&
                            router.push('/comunidade');
                    }}
                >
                    Comunidade
                </S.Page>
                <S.Page
                    active={currentPage === 'friends'}
                    onClick={() => {
                        currentPage !== 'friends' && router.push('/amigos');
                    }}
                >
                    Amigos
                </S.Page>
                <S.Page
                    active={currentPage === 'profile'}
                    onClick={() => {
                        currentPage !== 'profile' && router.push('/perfil');
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
