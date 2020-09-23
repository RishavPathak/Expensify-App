// import React from 'react'
// import {deleteExpense} from './redux/actions/expenseAction'
// import { connect } from 'react-redux'

// function ExpenseListItems(props) {
//     console.log('ssssssssssssssssssssssssssssssssssss',props.expenses)
    
    

//     console.log('id',amount)
//     const display = (
//         props.expenses.map((expense) => {
//             return <div key="expense.id">
                        
//                     <h3 >{expense.description}</h3>
//                     <p>{expense.amount}- {expense.createdAt}</p>
//                     <button onClick={()=>props.dispatch(deleteExpense())}>
//                     Delete Expense
//                     </button>
//                 </div>
            
//         }))

//     return (
//         <div>
//             {display}
//         </div>
//     )
// }

// export default connect()(ExpenseListItems)