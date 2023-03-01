import { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import { itensProp } from "./models";


const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: { expense: boolean; }) => item.expense)
      .map((transaction: { amount: string; }) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item: { expense: boolean; }) => !item.expense)
      .map((transaction: { amount: string; }) => Number(transaction.amount));

    //Entrada
    const income = amountIncome.reduce((acc: any, cur: any) => acc + cur, 0).toFixed(2);
    //Saida
    const expense = amountExpense.reduce((acc: any, cur: any) => acc + cur, 0).toFixed(2);
    //Total
    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction: itensProp) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;