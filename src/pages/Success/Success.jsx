import { Body, Container } from '../Success/styleSuccess';
import { Header } from '../../components/Header/header';
import { Button } from '../../components/Button/styleButton';
import { useNavigate } from "react-router-dom";

export function Success() {

  let navigate = useNavigate();

  const handleOnClick = () => {
    
    navigate('/', { replace: true })
    
  }

  return (
    <Body>
      <Container>
        <div>       
          <Header title="Success!" />        
          <Button onClick={handleOnClick} >Go Back!</Button>        
        </div>
      </Container>
    </Body>
        
  );
}

export default Success;