import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;

const Label = styled.label`
  font-family: "Nunito";
  font-size: 13px;
  text-align: left;
  margin-top: 0.93em;
  color: #767676;
  font-weight: 700;
`;

const InputStyle = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 2.2em;
  background: #ffffff;
  border: 0.125em solid #aaaaaa;
  border-radius: 0.25em;
  padding: 0.3em;

  &::placeholder {
    height: 18px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #767676;
  }
`;

const SpanError =styled.span `
    height: 18px;
    font-family: "Nunito";
    font-size: 12px;
    color: #FF0000;
    font-weight: 700;
`;

export { Label, InputStyle, Container, SpanError };