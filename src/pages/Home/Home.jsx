import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Body, Container, ContactContainer, PasswordContainer } from './styleHome'
import  Header  from '../../components/Header/header'
import Input  from '../../components/Inputs/Input'
import Footer from '../../components/Footer/Footer'

export function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  //TODO: 

  const [isValid, setIsValid] = useState(false)

  let navigate = useNavigate();

  const handleName = (evt) => {
    setName(evt.target.value)
  }

  const handleEmail = (evt) => {
    const email = evt.target.value
    const pattern = /\S+@\S+\.\S+/

    if(pattern.test(email)) {
      setIsValid(true)
    }
    
    setEmail(evt.target.value)
  }

  const handleSubmit = () => {
    console.log('nossos valores', { name, email, isValid })
    if(!isValid) {
      // TODO: VALIDADE RULES
      alert('FORMULÁRIO INVÁLIDO!!!!!')
      return
    }

    navigate('/success', { replace: true })
  }


  return (
    <Body>
      <Container>
        <form>
          <Header title="Inter Sign Up"/>
          <Input
            label="Full Name *"
            placeholder="Name"
            type="text"
            onChange={handleName}
            value={name}
            span="Fullname Invalid"
          />
          <ContactContainer>
            <Input
              label="Email *"
              placeholder="foo@bar.com"
              type="email"
              value={email}
              onChange={handleEmail}
              span="Email Invalid"
            />
            <Input label="Phone" placeholder="(83) 99999-9999" type="number" span="Phone Invalid"/>
          </ContactContainer>
          <PasswordContainer>
            <Input label="Password *" placeholder="Enter your password" type="password" span="Password Invalid"/>
            <Input label="Birthday *" type="date" span="Age Invalid"/>         
          </PasswordContainer>     
        </form>
        <Footer id="check" onSubmit={handleSubmit} label="Register" span="You must accept the terms"
        />
      </Container>
    </Body>        
  );
}

export default Home;

