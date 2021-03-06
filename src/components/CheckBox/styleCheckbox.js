import styled from 'styled-components';

const CheckBoxContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 15px 30px;
 
  > input {
    display: inline-flex;    
    width: 16px;
    height: 16px;
    border-radius: 3px;
    margin-right: 5px;
    vertical-align: middle;
    filter: drop-shadow(2px 2px 2px #767676);   
}

  label {
    filter: drop-shadow(2px 2px 2px #767676);
    font-weight: 700;
  }

  @media(max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

export { CheckBoxContainer }