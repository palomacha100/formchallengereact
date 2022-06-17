import React from 'react';
import { Body, Container, Title } from './styleHome'
import  Header  from '../../components/Header/header'
import Input  from '../../components/Inputs/input';
import Footer from '../../components/Footer/Footer'

export function Home() {
  return (
    <Body>
      <Container>
        <form>
          <Header />
          <Title>Inter Sign Up</Title>
          <Input label="Full Name *" placeholder="Name" type="text"/>
          <div>
            <Input label="Email *" placeholder="foo@bar.com" type="email"/>
            <Input label="Phone" placeholder="(83) 99999-9999" type="number"/>
          </div>
          <div>
            <Input label="Password *" placeholder="Enter your password" type="password"/>
            <Input label="Birthday *" type="date"/>         
          </div>     
        </form>
        <Footer id="check" type="checkbox" htmlFor="check" label="I accept the terms and privacy" idSubmit="submit" typeButton="submit" value="Register"/>
      </Container>
    </Body>        
  );
}

export default Home;

