
import { useState, useMemo } from "react";

const initialExpenses = [
    { id: 1, title: "Groceries", category: "Food", amount: 1500 },
    { id: 2, title: "Bus Pass", category: "Travel", amount: 800 },
    { id: 3, title: "Restaurant", category: "Food", amount: 1200 },
    { id: 4, title: "Electricity Bill", category: "Bills", amount: 1800 },
    { id: 5, title: "Shopping", category: "Shopping", amount: 2500 },
    { id: 6, title: "Fuel", category: "Travel", amount: 1000 },
    { id: 7, title: "Internet", category: "Bills", amount: 900 }
];

function ExpenseAnalyticsTask() {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [category, setCategory] = useState("All");
    const [count, setCount] = useState(0);

    const analytics = useMemo(() => {
        console.log("Calculating expense analytics...");

        const total = expenses.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        const categoryTotals = expenses.reduce((result, item) => {
            result[item.category] =
                (result[item.category] || 0) + item.amount;

            return result;
        }, {});

        return { total, categoryTotals };
    }, [expenses]);

    const filteredExpenses = useMemo(() => {
        return expenses.filter(item =>
            category === "All" || item.category === category
        );
    }, [expenses, category]);

    const addExpense = () => {
        const newExpense = {
            id: Date.now(),
            title: "New Expense",
            category: "Food",
            amount: 500
        };

        setExpenses(prev => [...prev, newExpense]);
    };

    const formatAmount = amount =>
        `₹${amount.toLocaleString("en-IN")}`;

    return (
        <div className="perf-demo">

            <div className="perf-task-heading">
                <div>
                    <h3>💰 Expense Analytics</h3>
                    <p>Track your spending and category totals.</p>
                </div>

                <span className="perf-task-count">
                    {expenses.length} Transactions
                </span>
            </div>

            <div className="perf-total-card">
                <span>Total Spending</span>
                <h2>{formatAmount(analytics.total)}</h2>
                <small>Across all categories</small>
            </div>

            <div className="perf-analytics-grid">
                {Object.entries(analytics.categoryTotals).map(
                    ([name, amount]) => (
                        <div className="perf-analytics-card" key={name}>
                            <span>{name}</span>
                            <h3>{formatAmount(amount)}</h3>
                        </div>
                    )
                )}
            </div>

            <div className="perf-filter-row">
                <select
                    className="perf-select"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Bills">Bills</option>
                    <option value="Shopping">Shopping</option>
                </select>

                <button
                    className="perf-primary-btn"
                    onClick={addExpense}
                >
                    + Add Expense
                </button>
            </div>

            <div className="perf-transaction-list">
                {filteredExpenses.map(item => (
                    <div className="perf-transaction" key={item.id}>
                        <div>
                            <strong>{item.title}</strong>
                            <span>{item.category}</span>
                        </div>

                        <strong>{formatAmount(item.amount)}</strong>
                    </div>
                ))}

                {filteredExpenses.length === 0 && (
                    <div className="perf-empty">
                        No transactions found.
                    </div>
                )}
            </div>

            <button
                className="perf-secondary-btn"
                onClick={() => setCount(prev => prev + 1)}
            >
                Unrelated Counter: {count}
            </button>

            <div className="perf-info">
                <strong>Optimization Challenge:</strong>
                <p>
                    Analytics totals are memoized based on expenses.
                    Filtering has a separate memoized calculation.
                    Update the unrelated counter and observe the console.
                </p>
            </div>

        </div>
    );
}

export default ExpenseAnalyticsTask;
