import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 104px;

    background-color: #fff;
`;

export const Logo = styled.img``;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 44px;

    background: url('images/login.png') no-repeat fixed center;
    -webkit-background-size: cover;

    width: 100vw;
    height: 100%;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    width: 700px;
    padding: 44px 16px;
    border-radius: 8px;
    background-color: #fff;
`;

export const Title = styled.h1`
    color: white;
    font-size: 32px;
    font-weight: 300;
    letter-spacing: 1.76px;
`;

export const RememberCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
`;

export const RememberText = styled.p`
    color: #afafaf;
    font-size: 12px;
`;

export const SignUpText = styled.p`
    color: #afafaf;
    font-size: 12px;
    margin-top: 32px;
    cursor: pointer;
`;
