import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    > form {
      width: 100%;
      padding: 40px 40px 20px 40px;

      @media(max-width: 768px) {
        padding: 10px;
      }
    }
    
  }
`;

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

    @media(max-width: 768px) {
      display: flex;
      width: 100%;
      flex-direction: column;
      margin-top: 50px;
    }
`;

export const Body = styled.body`
    background-color: #E5E5E5;
    padding: 30px;

    @media(max-width: 768px) {
      background-color: white;
      padding: 5px;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;

    div:nth-child(1) {
      flex: 2;
    }

    @media(max-width: 768px) {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 100%;
    }
`;

export const PasswordContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;

    div:nth-child(1) {
      flex: 2;
    }

    @media(max-width: 768px) {
      display: flex;
      flex: 1;

      div:nth-child(1) {
      flex: 1;
    }
    }
`;



