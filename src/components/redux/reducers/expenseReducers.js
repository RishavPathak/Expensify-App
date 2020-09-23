const expenseReducerDefaultState = []


const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'DELETE_EXPENSE':
            return state.filter((expense) =>  expense.id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                }
            })

        default:
            return state
    }
}


export default expenseReducer
