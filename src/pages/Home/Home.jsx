import React from 'react';
import { Container } from './styleHome'
import { Confirm } from '../../components/Button/Button'
import { Header } from '../../components/Header/header'
import { Enter } from '../../components/Inputs/Input'
import { Check } from '../../components/Checkbox/Checkbox'


export function Home() {
  return (
    <Container>
      <Header />
      <Enter />
      <Check />       
      <Confirm />
    </Container>    
  );
}

export default Home;