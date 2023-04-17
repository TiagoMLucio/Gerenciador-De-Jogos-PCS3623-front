import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 64px;
    gap: 200px;

    position: fixed;

    height: 104px;
    width: 100vw;
    background-color: white;
    z-index: 10;
`;

export const Logo = styled(Image)``;

export const Pages = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
`;

interface PageProps {
    active: boolean;
}

export const Page = styled.p<PageProps>`
    color: ${(props) => (props.active ? '#1976d2' : 'black')};
    font-size: 24px;
    font-weight: bold;
    text-transform: Uppercase;
    letter-spacing: 1.6px;
    cursor: pointer;
`;
