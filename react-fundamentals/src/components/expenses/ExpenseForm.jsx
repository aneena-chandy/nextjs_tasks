import { useState, useContext } from "react";

import ExpenseContext from "../../context/ExpenseContext";

import { categories } from "../../data/expenseData";

function ExpenseForm() {

    const { dispatch } = useContext(ExpenseContext);

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        type: "expense",
        category: "Food",
        date: new Date().toISOString().split("T")[0]
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !formData.title.trim() ||
            !Number.isFinite(Number(formData.amount)) ||
            Number(formData.amount) <= 0
        ) {
            return;
        }

        const newTransaction = {
            id: crypto.randomUUID(),
            ...formData,
            amount: Number(formData.amount)
        };

        dispatch({
            type: "ADD_TRANSACTION",
            payload: newTransaction
        });

        setFormData({
            title: "",
            amount: "",
            type: "expense",
            category: "Food",
            date: new Date().toISOString().split("T")[0]
        });
    };

    return (

        <div className="expense-form-card">

            <h3>Add New Transaction</h3>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Transaction Title</label>

                    <input
                        type="text"
                        name="title"
                        placeholder="Enter transaction name"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Amount (₹)</label>

                        <input
                            type="number"
                            name="amount"
                            placeholder="Enter amount"
                            min="0.01"
                            step="0.01"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Transaction Type</label>

                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>

                    </div>

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Category</label>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            {categories.map(category => (
                                <option
                                    key={category}
                                    value={category}
                                >
                                    {category}
                                </option>
                            ))}
                        </select>

                    </div>

                    <div className="form-group">

                        <label>Date</label>

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />

                    </div>

                </div>

                <button type="submit" className="add-transaction-btn">
                    + Add Transaction
                </button>

            </form>

        </div>
    );
}

export default ExpenseForm;