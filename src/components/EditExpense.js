import React from 'react'

function EditExpense(props) {
    console.log(props)
    return (
        <div>
            Edit Expense page  with id {props.match.params.id}
        </div>
    )
}

export default EditExpense
