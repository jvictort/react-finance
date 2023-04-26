import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  max-width: 1120px;
  width: 98%;
  margin: 20px auto;
  padding: 15px 0px;
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 5px;

  @media(max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #CCC;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: #000;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 1px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #FFF;
  background-color: teal;
`
