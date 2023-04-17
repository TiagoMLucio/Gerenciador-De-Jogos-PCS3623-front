import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    background: url('/images/login.png') no-repeat fixed center;
    -webkit-background-size: cover;
    height: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    height: 100%;
    width: 100vw;
    padding: 16px;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: #08354c;

    width: 50vw;
    padding: 40px;
    border-radius: 16px;
    gap: 64px;

    min-height: 100%;
`;

export const MainInfo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
    background-color: #082636;
    border-radius: 16px;
    padding: 32px;
`;

export const ImageContainer = styled.div`
    border: 2px solid;
    height: 128px;
    width: 128px;
    border-radius: 8px;
    overflow: hidden;
`;

export const ProfileImage = styled(Image)``;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Username = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: white;
`;

export const Email = styled.p`
    font-size: 16px;
    color: lightgray;
`;

export const Games = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
`;

export const GamesTitle = styled.p`
    width: 100%;
    font-size: 20px;
    color: white;
    background-color: #082636;
    padding: 8px;
    border-radius: 8px;
`;