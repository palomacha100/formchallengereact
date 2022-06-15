import React from 'react';
import { Body, Container, Title } from './styleHome'
import { Confirm } from '../../components/Button/Button'
import { Header } from '../../components/Header/header'
import { Enter } from '../../components/Inputs/Input'
import { Check } from '../../components/Checkbox/Checkbox'


export function Home() {
  return (
    <Body>
      <Container>
        <Header />
        <Title>Inter Sign Up</Title>
        <Enter />
        <Check />       
        <Confirm />
      </Container>
    </Body>
        
  );
}

export default Home;

