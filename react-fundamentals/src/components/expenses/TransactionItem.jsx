import { useContext } from "react";

import ExpenseContext from "../../context/ExpenseContext";

function TransactionItem({ transaction }) {

    const { dispatch } = useContext(ExpenseContext);

    const deleteTransaction = () => {

        dispatch({
            type: "DELETE_TRANSACTION",
            payload: transaction.id
        });

    };

    return (

        <tr>

            <td>{transaction.title}</td>

            <td>{transaction.category}</td>

            <td>{transaction.date}</td>

            <td>
                <span className={`type-label ${transaction.type}`}>
                    {transaction.type}
                </span>
            </td>

            <td className={
                transaction.type === "income"
                    ? "income-text"
                    : "expense-text"
            }>
                {transaction.type === "income" ? "+" : "-"}
                ₹{transaction.amount.toLocaleString("en-IN")}
            </td>

            <td>
                <button
                    className="delete-transaction-btn"
                    onClick={deleteTransaction}
                    title="Delete transaction"
                    aria-label={`Delete ${transaction.title}`}
                >
                    🗑
                </button>
            </td>

        </tr>
    );
}

export default TransactionItem;