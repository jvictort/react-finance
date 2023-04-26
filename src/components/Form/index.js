import React, { useState } from 'react';

import * as C from './style';

const Form = ({ handleAdd }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if(!desc || !amount) {
      alert('Informe a descrição e o valor');
      return;
    } else if(amount < 1) {
      alert('O valor tem que ser positivo');
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      isExpense: isExpense
    }

    handleAdd(transaction);

    setDesc('');
    setAmount('');

  }

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input
              value={desc}
              onChange={event => setDesc(event.target.value)}
          />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
              value={amount}
              type="number"
              onChange={event => setAmount(event.target.value)}
          />
        </C.InputContent>

        <C.InputContent>
          <C.RadioGroup>
            <C.Input
              type="radio"
              id="rIncome"
              defaultChecked
              name="group1"
              onChange={event => setExpense(!isExpense)}
            />

            <C.Label htmlFor="rIncome">Entrada</C.Label>

            <C.Input
              type="radio"
              id="rExpenses"
              name="group1"
              onChange={event => setExpense(!isExpense)}
            />

            <C.Label htmlFor="rExpenses">Saída</C.Label>
          </C.RadioGroup>
        </C.InputContent>

        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>
    </>
  );
}

export default Form;
