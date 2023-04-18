import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 16px;
    gap: 16px;
    width: 600px;
    height: 540px;
    background-color: #08354c;

    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -270px;

    border-radius: 8px;
`;

export const ModalTitle = styled.p`
    color: white;
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
`;
