import Image from 'next/image';
import styled from 'styled-components';

export const User = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 8px;
    gap: 32px;

    width: 100%;
    height: 120px;
    background-color: #082636;
    border-radius: 8px;
`;

export const UserImageContainer = styled.div`
    position: relative;
    border-radius: 8px;
    width: 104px;
    height: 104px;
    overflow: hidden;
`;

export const UserImage = styled(Image)``;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-grow: 4;
`;

export const Username = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    padding: 2px;
    background-color: #66a2bb;
`;

export const CategoryName = styled.p`
    color: white;
    font-size: 12px;
    font-weight: bold;
`;

export const OtherGameInfo = styled.p`
    color: white;
    font-size: 12px;
`;

export const GameInfoRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const FriendDate = styled.p`
    color: lightgrey;
    font-size: 14px;
    margin-top: 4px;
`;
