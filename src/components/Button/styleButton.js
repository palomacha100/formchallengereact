import styled from 'styled-components'

const Button = styled.button`
  width: 80px;
  height: 40px;
  background: #0dbdbd;
  border-radius: 10px;
  border: none;
  font-family: "Nunito";
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #087a7a;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export { Button };