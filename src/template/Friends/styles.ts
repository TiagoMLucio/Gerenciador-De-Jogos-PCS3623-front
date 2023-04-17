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

    margin-top: 104px;
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
    gap: 32px;

    min-height: 100%;
`;

export const SubTitle = styled.p`
    width: 100%;
    font-size: 20px;
    color: white;
    background-color: #082636;
    padding: 8px;
    border-radius: 8px;
    margin-top: 32px;
`;

export const Users = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    gap: 16px;
    width: 100%;
`;
