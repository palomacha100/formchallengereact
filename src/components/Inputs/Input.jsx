import { Container, InputStyle, Label, SpanError } from './styleInput';

const Input = ({ id, placeholder, type, label, value, onChange, span}) => {
     return (
         <Container>
             <Label>{label}</Label>
             <InputStyle id={id} placeholder={placeholder} type={type} value={value} onChange={onChange}
            />
            <SpanError>{span}</SpanError>
         </Container>
    )
}

export default Input;
