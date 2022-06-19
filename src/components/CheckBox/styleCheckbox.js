import styled from 'styled-components'

const CheckBoxContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 15px 30px;

  > input {
    display: none;
  }
 
  > input + label:before {
  display: inline-flex;
  content: "";
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border: 1px solid #0dbdbd;
  border-radius: 3px;
  margin-right: 5px;
  vertical-align: middle;
  filter: drop-shadow(2px 2px 2px #767676);

  }
  label {
    filter: drop-shadow(2px 2px 2px #767676);
    font-weight: 700;
  }

  > span {
    height: 18px;
    font-family: "Nunito";
    font-size: 12px;
    color: #FF0000;
    font-weight: 700;
  }
`;

export { CheckBoxContainer }