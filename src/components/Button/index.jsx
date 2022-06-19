import React from 'react'
import { ButtonStyle } from './styleButton'

const Button = ({ id, text, onClick }) => {
  return (
    <div>
      <ButtonStyle id={id} onClick={onClick}>{text}</ButtonStyle>
    </div>
  )
}

export default Button;