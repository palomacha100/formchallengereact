import React from 'react'
import { CheckBoxContainer } from './styleCheckbox'

const CheckBox = ({ checked, text, onClick, span }) => {
  return (
      <CheckBoxContainer>
          <input type="checkbox" name="acceptTerms" id="acceptTerms" />
          <label for="acceptTerms" >{text}</label>
          <span>{span}</span>
      </CheckBoxContainer>
  )
}

export { CheckBox }