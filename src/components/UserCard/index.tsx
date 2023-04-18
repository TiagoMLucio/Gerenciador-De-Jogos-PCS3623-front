import React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import * as S from './styles';

export type UserCardProps = {
    name: string;
    image: string;
    hasFriendButton?: boolean;
    id?: string;
    friendDate?: string;
};

const UserCard: React.FC<UserCardProps> = ({
    name,
    image,
    hasFriendButton,
    id,
    friendDate
}) => {
    const router = useRouter();

    return (
        <S.User>
            <S.UserImageContainer>
                <S.UserImage
                    layout="fill"
                    objectFit="contain"
                    src="/images/avatar.png"
                />
            </S.UserImageContainer>
            <S.UserInfo>
                <S.Username>{name + image}</S.Username>
                <Button
                    size="medium"
                    sx={{
                        width: '200px'
                    }}
                    variant="contained"
                    onClick={() => {
                        router.push({
                            pathname: '/user/profile',
                            query: {
                                id
                            }
                        });
                    }}
                >
                    Acessar Perfil
                </Button>
                {hasFriendButton ? (
                    <Button
                        size="medium"
                        sx={{
                            width: '200px'
                        }}
                        variant="contained"
                    >
                        Adicionar como Amigo
                    </Button>
                ) : (
                    <S.FriendDate>Amigos desde {friendDate}</S.FriendDate>
                )}
            </S.UserInfo>
        </S.User>
    );
};

export default UserCard;
