import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Body, Container, ContactContainer, PasswordContainer } from './styleHome';
import  Header  from '../../components/Header/header';
import Input  from '../../components/Inputs/Input';
import Footer from '../../components/Footer/Footer';

export function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const [nameError, setNameError] = useState(false)
  const [mailError, setMailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [isValid, setIsValid] = useState(false)

  let navigate = useNavigate();

  const handleName = (evt) => {
    const name = evt.target.value
    const pattern = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi
    setName(evt.target.value)

    if(!pattern.test(name)) {
      setNameError(true)
      setIsValid(false)
      return
    }

    setIsValid(true)
    setNameError(false)
  }

  const handleEmail = (evt) => {
    const email = evt.target.value
    const pattern = /\S+@\S+\.\S+/

    setEmail(evt.target.value)

    if(!pattern.test(email)) {
      setMailError(true)
      setIsValid(false)
      return
    }
    
    setIsValid(true)
    setMailError(false)
  }

  const handlePhone = (evt) => {
    const phone = evt.target.value
    const pattern = /\d{11}/g

    setPhone(evt.target.value)

    if(!pattern.test(phone)) {
      setPhoneError(true)
      setIsValid(false)
      return
    }

    setIsValid(true)
    setPhoneError(false)
  }

  const handlePassword = (evt) => {
    const password = evt.target.value
    const pattern = /([0-9]){6,8}/g

    setPassword(evt.target.value)

    if(!pattern.test(password)) {
      setPasswordError(true)
      setIsValid(false)
      return
    }

    setIsValid(true)
    setPasswordError(false)
  }

  const resetFields = () => {
    nameError && setNameError(false)
    mailError && setMailError(false)
    phoneError && setPhoneError(false)
    passwordError && setPasswordError(false)
  }

  const handleSubmit = () => {
    if(!isValid) {
      return
    }

    resetFields()
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
            hasError={nameError}
          />
          <ContactContainer>
            <Input
              label="Email *"
              placeholder="foo@bar.com"
              type="email"
              value={email}
              onChange={handleEmail}
              hasError={mailError}
            />
            <Input 
              label="Phone" 
              placeholder="(83) 99999-9999" 
              type="number" 
              value={phone} 
              onChange={handlePhone}
              hasError={phoneError}
            />
          </ContactContainer>
          <PasswordContainer>
            <Input 
              label="Password *" 
              placeholder="Enter your password" 
              type="password" 
              value={password} 
              onChange={handlePassword} 
              hasError={passwordError}
            />
            <Input 
              label="Birthday *" 
              type="date" 
              placeholder="yyyy-mm-dd"
            />         
          </PasswordContainer>     
        </form>
        <Footer 
          id="check" 
          onSubmit={handleSubmit} 
          label="Register"
        />
      </Container>
    </Body>        
  );
}

export default Home;