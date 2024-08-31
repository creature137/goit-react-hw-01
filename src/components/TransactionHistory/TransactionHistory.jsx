import clsx from "clsx";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableHeader}>
        <tr>
          <th className={s.headerCell}>Type</th>
          <th className={s.headerCell}>Amount</th>
          <th className={s.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={s.bodyRow} key={id}>
              <td className={clsx([s.bodyCell], [s.typeCell])}>{type}</td>
              <td className={clsx([s.bodyCell], [s.amountCell])}>{amount}</td>
              <td className={clsx([s.bodyCell], [s.currencyCell])}>
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
