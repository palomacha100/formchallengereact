import React from 'react';
import { Container } from './components/Container'
import { Button } from "./components/Button";
import { Checkbox } from './components/Checkbox';
import { Header } from './components/Header'

function App() {
  return (
    <Container>
      <Header />
      <h1>Inter Sign Up</h1>  
      <Checkbox />
      <Button>Register</Button>
    </Container>    
  );
}

export default App;
