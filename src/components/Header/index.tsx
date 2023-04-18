import { useRouter } from 'next/router';
import { WalletOutlined } from '@mui/icons-material';
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
            <S.Wallet>
                <WalletOutlined htmlColor="white" fontSize="large" />
                <S.WalletAmount>
                    R$ {(123).toFixed(2).replace('.', ',')}
                </S.WalletAmount>
            </S.Wallet>
        </S.Wrapper>
    );
};

export default Header;
