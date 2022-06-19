import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 16px;
  margin-bottom: 8%; 
  justify-content: space-between;
  align-items: center;
`;

const LabelContainer = styled.div`
  display: flex;
  
  font-family: 'Nunito';
  font-size: 14px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 15px 25px;
  
`;


export { FooterContainer, LabelContainer, ButtonContainer };