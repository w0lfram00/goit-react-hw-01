import React from "react";
import s from "./TransactionHistory.module.css";
import TransactionRaw from "./TransactionRaw";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(s.table)}>
      <thead className={clsx(s.thead)}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </thead>
      <tbody className={clsx(s.tbody)}>
        {items.map((item) => (
          <tr>
            <TransactionRaw
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
