import { useRouter } from 'next/router';
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
                        currentPage !== 'store' && router.push('/store');
                    }}
                >
                    Loja
                </S.Page>
                <S.Page
                    active={currentPage === 'community'}
                    onClick={() => {
                        currentPage !== 'community' &&
                            router.push('/community');
                    }}
                >
                    Comunidade
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
        </S.Wrapper>
    );
};

export default Header;
