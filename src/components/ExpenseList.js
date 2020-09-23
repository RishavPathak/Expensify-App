import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItems from './ExpenseListItems'
import getVisibleExpenses from '../components/redux/selectors/expenses'
import {deleteExpense} from './redux/actions/expenseAction'

function ExpenseList(props) {
    return (
        <div>
        <ExpenseListItems  expenses={props.expenses}/>
        </div>
    )
}


const mapStateToProps=(state)=>{
    console.log(state)
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}
 
export default connect(mapStateToProps)(ExpenseList)
