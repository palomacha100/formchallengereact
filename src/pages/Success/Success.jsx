import React from 'react';
import { Body, Container, Title } from '../Success/styleSuccess'
import { Confirm } from '../../components/Button/Button'
import { Header } from '../../components/Header/header'

export function Success() {
  return (
    <Body>
      <Container>
        <Header />
        <Title>Success!</Title>     
        <Confirm />
      </Container>
    </Body>
        
  );
}

export default Success;