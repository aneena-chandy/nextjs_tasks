
import { useState, useMemo } from "react";

function UseMemoExample() {
    const [expenses, setExpenses] = useState([
        { id: 1, title: "Food", amount: 500 },
        { id: 2, title: "Travel", amount: 300 },
        { id: 3, title: "Shopping", amount: 1000 },
        { id: 4, title: "Electricity", amount: 700 }
    ]);

    const [count, setCount] = useState(0);

    const total = useMemo(() => {
        console.log("Calculating total expenses...");

        return expenses.reduce(
            (sum, expense) => sum + expense.amount,
            0
        );
    }, [expenses]);

    const addExpense = () => {
        const newExpense = {
            id: Date.now(),
            title: "New Expense",
            amount: 250
        };

        setExpenses(prev => [...prev, newExpense]);
    };

    return (
        <div className="perf-demo">

            <div className="perf-demo-header">
                <span className="perf-icon green">💰</span>

                <div>
                    <h3>Expense Calculation</h3>
                    <p>Memoize the total expense calculation.</p>
                </div>
            </div>

            <div className="perf-total-card">
                <span>Total Expenses</span>
                <h2>₹{total.toLocaleString("en-IN")}</h2>
                <small>{expenses.length} Transactions</small>
            </div>

            <div className="perf-expense-list">
                {expenses.map(expense => (
                    <div key={expense.id} className="perf-expense-item">
                        <span>📌 {expense.title}</span>
                        <strong>
                            ₹{expense.amount.toLocaleString("en-IN")}
                        </strong>
                    </div>
                ))}
            </div>

            <div className="perf-actions">
                <button
                    className="perf-primary-btn"
                    onClick={addExpense}
                >
                    + Add Expense
                </button>

                <button
                    className="perf-secondary-btn"
                    onClick={() => setCount(prev => prev + 1)}
                >
                    Unrelated Counter: {count}
                </button>
            </div>

            <div className="perf-info">
                <strong>Try this:</strong>
                <p>
                    Click Unrelated Counter. The component renders again,
                    but the total calculation is reused. Add Expense to
                    change the dependency and recalculate the total.
                </p>
            </div>

        </div>
    );
}

export default UseMemoExample;
