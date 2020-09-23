import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

function ExpenseDashbord() {
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
}

export default ExpenseDashbord
