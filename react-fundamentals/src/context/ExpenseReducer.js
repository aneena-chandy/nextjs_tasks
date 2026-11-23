export const initialState = {
    transactions: []
};

export function expenseReducer(state, action) {

    switch (action.type) {

        case "ADD_TRANSACTION":

            return {
                ...state,
                transactions: [
                    action.payload,
                    ...state.transactions
                ]
            };

        case "DELETE_TRANSACTION":

            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction =>
                        transaction.id !== action.payload
                )
            };

        case "CLEAR_TRANSACTIONS":

            return {
                ...state,
                transactions: []
            };

        default:
            return state;
    }
}