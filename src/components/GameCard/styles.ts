import Image from 'next/image';
import styled from 'styled-components';

export const Game = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 8px;
    gap: 32px;

    width: 100%;
    height: 160px;
    background-color: #082636;
    border-radius: 8px;
`;

export const GameImageContainer = styled.div`
    border-radius: 8px;
    width: 200px;
    height: 144px;
    overflow: hidden;
`;

export const GameImage = styled(Image)``;

export const GameInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
    flex-grow: 4;
`;

export const GameInfoLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

export const GameName = styled.p`
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
