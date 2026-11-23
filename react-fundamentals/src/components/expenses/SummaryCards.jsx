import { useContext } from "react";

import ExpenseContext from "../../context/ExpenseContext";

function SummaryCards() {

    const {
        totalIncome,
        totalExpenses,
        balance
    } = useContext(ExpenseContext);

    const formatAmount = (amount) => {
        return amount.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        });
    };

    return (
        <div className="summary-grid">

            <div className="summary-card income-card">
                <div className="summary-icon">📈</div>
                <p>Total Income</p>
                <h2>{formatAmount(totalIncome)}</h2>
                <span>Money received</span>
            </div>

            <div className="summary-card expense-card">
                <div className="summary-icon">📉</div>
                <p>Total Expenses</p>
                <h2>{formatAmount(totalExpenses)}</h2>
                <span>Money spent</span>
            </div>

            <div className="summary-card balance-card">
                <div className="summary-icon">💰</div>
                <p>Available Balance</p>
                <h2>{formatAmount(balance)}</h2>
                <span>Current balance</span>
            </div>

        </div>
    );
}

export default SummaryCards;