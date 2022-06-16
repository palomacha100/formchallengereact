import { Body, Container, Title } from '../Success/styleSuccess'
// import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/header'

export function Success() {
  return (
    <Body>
      <Container>
        <Header />
        <Title>Success!</Title>     
        {/* <Button value="Go Back!"/> */}
      </Container>
    </Body>
        
  );
}

export default Success;