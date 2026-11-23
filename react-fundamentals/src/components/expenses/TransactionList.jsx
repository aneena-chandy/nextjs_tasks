import { useContext, useState } from "react";

import ExpenseContext from "../../context/ExpenseContext";

import TransactionItem from "./TransactionItem";
import CategoryFilter from "./CategoryFilter";

function TransactionList() {

    const { transactions } = useContext(ExpenseContext);

    const [selectedCategory, setSelectedCategory] = useState("All");

    const [searchTerm, setSearchTerm] = useState("");

    const filteredTransactions = transactions.filter(item => {

        const matchesCategory =
            selectedCategory === "All" ||
            item.category === selectedCategory;

        const matchesSearch =
            item.title.toLowerCase().includes(
                searchTerm.toLowerCase()
            );

        return matchesCategory && matchesSearch;
    });

    return (

        <div className="transaction-card">

            <div className="transaction-header">

                <div>
                    <h3>Recent Transactions</h3>
                    <p>Manage your income and expenses</p>
                </div>

                <span className="transaction-count">
                    {filteredTransactions.length} Transactions
                </span>

            </div>

            <div className="transaction-filters">

                <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />

            </div>

            <div className="table-responsive">

                <table className="transaction-table">

                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredTransactions.length > 0 ? (

                            filteredTransactions.map(transaction => (

                                <TransactionItem
                                    key={transaction.id}
                                    transaction={transaction}
                                />

                            ))

                        ) : (

                            <tr>
                                <td colSpan="6" className="empty-message">
                                    No transactions found.
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default TransactionList;