import { createStore, combineReducers } from 'redux'
import expenseReducer from '../reducers/expenseReducers'
import filtersReducer from '../reducers/filterReducer'

export const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)