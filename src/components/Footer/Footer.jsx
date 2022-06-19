import React from 'react'
import { 
  FooterContainer,
  LabelContainer,
  ButtonContainer
} from '../Footer/styleFooter'

import { Button } from '../Button/styleButton'
import { CheckBox } from '../CheckBox/checkbox'

const Footer = ({ label, onSubmit }) => {

  return (
    <FooterContainer>
      <LabelContainer>
        <CheckBox text="I accept the terms and privacy" />
      </LabelContainer>      
      <ButtonContainer>
        <Button type="button" onClick={onSubmit}>{label}</Button>
      </ButtonContainer>
    </FooterContainer>
  )
}

export default Footer;