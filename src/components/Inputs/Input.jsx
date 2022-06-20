import { Container, InputStyle, Label, LabelError } from './styleInput';

const Input = ({ 
    id, 
    placeholder, 
    type, 
    label, 
    value, 
    onChange,
    hasError, 
    }) => {
     return (
         <Container>
             <Label>{label}</Label>
             <InputStyle 
                id={id} 
                placeholder={placeholder} 
                type={type} 
                value={value} 
                onChange={onChange}
                hasError={hasError}
            />          
            {hasError && <LabelError>{`${type} Invalid`}</LabelError>}
         </Container>
    )
}

export default Input;
