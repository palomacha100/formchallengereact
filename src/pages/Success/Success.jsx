import { Body, Container } from '../Success/styleSuccess'
import { Header } from '../../components/Header/header'
import { ButtonContainer } from '../../components/Footer/styleFooter';
import { Button } from '../../components/Button/styleButton';

export function Success() {
  return (
    <Body>
      <Container>
        <div>       
          <Header title="Success!" />        
          <Button >Go Back!</Button>        
        </div>
      </Container>
    </Body>
        
  );
}

export default Success;