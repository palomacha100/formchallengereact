import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 16px;
  margin-bottom:10%; 
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const LabelContainer = styled.div`
  display: flex;  
  font-family: 'Nunito';
  font-size: 14px;
  text-align: left;
  @media(max-width: 768px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 25px 0 25px;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export { FooterContainer, LabelContainer, ButtonContainer };