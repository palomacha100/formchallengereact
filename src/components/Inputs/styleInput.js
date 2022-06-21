import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
  height: 80px;
`;

const Label = styled.label`
  font-family: "Nunito";
  font-size: 13px;
  text-align: left;
  margin-top: 15px;
  color: #767676;
  font-weight: 700;

  @media(max-width: 768px) {
    margin-top: 5px;
  }
`;

const InputStyle = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 2.2em;
  background: #ffffff;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  padding: 5px;

  &::placeholder {
    height: 18px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #767676;
  }

`;

const LabelError = styled.label`
  font-family: "Nunito";
  font-size: 13px;
  text-align: left;
  margin-top: 5px;
  color: #FF0000;
  font-weight: 700;

`;

export { Label, InputStyle, Container, LabelError };