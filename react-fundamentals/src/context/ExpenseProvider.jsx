import { useReducer } from "react";

import ExpenseContext from "./ExpenseContext";

import {
    expenseReducer,
    initialState
} from "./ExpenseReducer";

import { initialTransactions } from "../data/expenseData";

function ExpenseProvider({ children }) {

    const [state, dispatch] = useReducer(
        expenseReducer,
        {
            ...initialState,
            transactions: initialTransactions
        }
    );

    // Calculate total income
    const totalIncome = state.transactions
        .filter(item => item.type === "income")
        .reduce((total, item) => total + item.amount, 0);

    // Calculate total expenses
    const totalExpenses = state.transactions
        .filter(item => item.type === "expense")
        .reduce((total, item) => total + item.amount, 0);

    // Calculate available balance
    const balance = totalIncome - totalExpenses;

    return (
        <ExpenseContext.Provider
            value={{
                transactions: state.transactions,
                dispatch,
                totalIncome,
                totalExpenses,
                balance
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
}

export default ExpenseProvider;