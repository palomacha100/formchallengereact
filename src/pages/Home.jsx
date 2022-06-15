import React from 'react';
import { Container } from '../components/Container'
import { Confirm } from '../components/Button/Button';
import { Header } from '../components/Header/header'
import { Enter } from '../components/Inputs/Input'


export function Home() {
  return (
    <Container>
      <Header />
      <Enter />       
      <Confirm />
    </Container>    
  );
}

export default Home;