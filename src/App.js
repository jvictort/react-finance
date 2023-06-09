import { useState, useEffect } from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header/index';
import Resume from './components/Resume/index';
import Form from './components/Form/index';

function App() {
  const data = localStorage.getItem('transactions');

  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountIncome = transactionsList
      .filter(item => !item.isExpense)
      .map(transaction => Number(transaction.amount));

    const amountExpense = transactionsList
      .filter(item => item.isExpense)
      .map(transaction => Number(transaction.amount));

    const income = amountIncome.reduce((acc, cur) => acc + cur, 0);
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0);

    const total = Math.abs(income - expense).toFixed(2);

    console.log(income, expense)

    setIncome(`R$ ${income.toFixed(2)}`);
    setExpense(`R$ ${expense.toFixed(2)}`);
    setTotal(`${income < expense ? '-' : ''}R$  ${total}`);

  }, [transactionsList])

  const handleAdd = transaction => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Resume income={income} expense={expense} total={total}/>
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
    </>
  );
}

export default App;
