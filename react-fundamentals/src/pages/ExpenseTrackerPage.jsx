import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import ExpenseProvider from "../context/ExpenseProvider";

import SummaryCards from "../components/expenses/SummaryCards";
import ExpenseForm from "../components/expenses/ExpenseForm";
import TransactionList from "../components/expenses/TransactionList";
import "../topics/context-api/ExpenseTracker.css";

function ExpenseTrackerPage() {

    return (
        <ExpenseProvider>

            <TopicPageLayout
                number="11"
                title="Context API & useReducer"
                description="Learn global state management using Context API and useReducer through a practical Expense Tracker."
            >

                <ExampleCard
                    title="1. Context API – Global State"
                    description="Context API allows multiple components to access shared data without passing props through every component."
                >
                    <p>
                        The Expense Tracker uses Context API to share transactions,
                        dispatch and summary values across components.
                    </p>

                    <p>
                        Open the Expense Form and Transaction List below.
                        Both components access the same shared expense state.
                    </p>
                </ExampleCard>

                <ExampleCard
                    title="2. useReducer – State Management"
                    description="useReducer manages complex state using actions and a reducer function."
                >
                    <p><strong>Actions used in this project:</strong></p>

                    <ul>
                        <li>ADD_TRANSACTION – Add income or expense.</li>
                        <li>DELETE_TRANSACTION – Remove a transaction.</li>
                        <li>CLEAR_TRANSACTIONS – Remove all transactions.</li>
                    </ul>

                    <p>
                        The reducer receives the current state and an action,
                        then returns the updated state.
                    </p>
                </ExampleCard>

                <ExampleCard
                    title="3. Expense Summary"
                    description="Calculate total income, expenses and remaining balance using array methods."
                >
                    <SummaryCards />
                </ExampleCard>

                <ExampleCard
                    title="4. Add Income & Expenses"
                    description="Add transactions and update the shared state using dispatch."
                >
                    <ExpenseForm />
                </ExampleCard>

                <ExampleCard
                    title="5. Transaction List"
                    description="Display transactions using map() and delete transactions using filter() through the reducer."
                >
                    <TransactionList />
                </ExampleCard>

                <ExampleCard
                    title="6. Context API vs Props"
                    description="Understand why Context API is useful when multiple components need the same data."
                >
                    <p><strong>Without Context API:</strong></p>
                    <p>
                        You may need to pass transactions and functions through
                        several parent and child components.
                    </p>

                    <p><strong>With Context API:</strong></p>
                    <p>
                        Components such as SummaryCards, ExpenseForm and
                        TransactionList can access the shared state directly.
                    </p>
                </ExampleCard>

            </TopicPageLayout>

        </ExpenseProvider>
    );
}

export default ExpenseTrackerPage;
