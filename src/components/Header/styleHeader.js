import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div > h1 {
        font-family: 'Inter';
        font-weight: 500;
        font-size: 2.25em;
        color: #111111;
        margin-top: 0.6px;
    }

    > div {
        display: flex;
    }
`;

const Image = styled.img`
    width: 13em;
    height: 7em; 
`;

export { Container, Image };