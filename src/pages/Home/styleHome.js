import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95vh;
    width: 35vw;
    border-radius: 1em;
    margin-right: auto;
    margin-left: auto;
    background-color: white;
`;

export const Body = styled.body`
    background-color: #E5E5E5;
    padding: 1em;
`;

export const Title = styled.h1`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 2.25em;
    color: #111111;
    margin-top: 0.6px;
`;

