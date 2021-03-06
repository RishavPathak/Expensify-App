import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid';

// expense reducer

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

const deleteExpense = ({ id } = {}) => ({
    type: 'DELETE_EXPENSE',
    id
})

const editExpense = (id, update) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        update

    }
)


// filter action created

const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
)

const sortByAmount = () => (
    {
        type: 'SORT_BY_AMOUNT'
    }
)

const sortByDate = () => (
    {
        type: 'SORT_BY_DATE'
    }
)

const setStartDate = (startDate = undefined) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
)

const setEndDate = (endDate = undefined) => (
    {
        type: 'SET_END_DATE',
        endDate
    }
)

//expense reducer
const expenseReducerDefaultState = []


const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'DELETE_EXPENSE':
            return state.filter((expense) => { return expense.id !== action.id })
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


const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}


// filter reducer

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}


const getVisibleExpenses=(expenses,{text, sortBy , startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch= typeof startDate!== 'number' || expense.createdAt >= startDate
        const endDateMatch= typeof endDate!== 'number' || expense.createdAt <= endDate
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 :-1
        }else if(sortBy==='amount'){
            return a.amount < b.amount ?1 :-1
        }
    })
} 

export const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)
store.subscribe(() => {
    const state=store.getState();
    const visibleExpense=getVisibleExpenses(state.expenses, state.filters);
    console.log('eeee',visibleExpense)
})


const expenseone = store.dispatch(addExpense({ description: 'rishav', note: '', amount: 500, createdAt: -11000 }))
const expensetwo = store.dispatch(addExpense({ description: 'tanisha', note: '', amount: 100, createdAt: -1000 }))
// console.log('yyy', store.getState())
// store.dispatch(deleteExpense({ id: expenseone.expense.id }))
// store.dispatch(editExpense(expensetwo.expense.id, { amount: 600, note: 'iiiiiiiiii' }))
// store.dispatch(setTextFilter('hhhhh'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount()) 
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(0))
// store.dis patch(setStartDate())
// store.dispatch(setEndDate(999))






// const demoState={
//     expenses:[
//         {
//             id:'random',
//             description:'januay rent',
//             note: 'this was the final payment',
//             amount:5400,
//             createdAt:0
//         }],
//         filters:{
//             text:'rent',
//             sortBy:'amount', //date or amount
//             stateDate: undefined,
//             endDate: undefined
//         } 
// }