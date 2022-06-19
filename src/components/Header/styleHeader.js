import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    > div > h1 {
        font-family: 'Inter';
        font-weight: 500;
        font-size: 36px;
        color: #111111;
        margin-top: 10px;
    }

    > div {
        display: flex;
    }
`;

const Image = styled.img`
    width: 213px;
    height: 124px; 
`;

export { Container, Image };