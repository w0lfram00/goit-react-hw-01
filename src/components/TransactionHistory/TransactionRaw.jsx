import React from "react";
import s from "./TransactionHistory.module.css";

const TransactionRaw = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

export default TransactionRaw;
