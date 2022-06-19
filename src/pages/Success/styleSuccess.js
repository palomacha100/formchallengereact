import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 580px;
    width: 490px;
    border-radius: 1em;
    margin-right: auto;
    margin-left: auto;
    background-color: white;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    > div > Button {
        margin-top: 40px;
        width: 220px;
        height: 150px;
        font-size: 36px;       
    }
`;

export const Body = styled.body`
    background-color: #E5E5E5;
    padding: 30px;
`;

