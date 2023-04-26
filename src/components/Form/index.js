import React, { useState } from 'react';

import * as C from './style';

const Form = () => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

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
              value={desc}
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
              defaultChecked
              name="group1"
              onChange={event => setExpense(!isExpense)}
            />

            <C.Label htmlFor="rExpenses">Saída</C.Label>
          </C.RadioGroup>
        </C.InputContent>

        <C.Button>Adicionar</C.Button>
      </C.Container>
    </>
  );
}

export default Form;
