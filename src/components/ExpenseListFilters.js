import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter} from './redux/actions/filteraction';



function ExpenseListFilters(props) {
    console.log('sss',props.filters.sortBy)
    return (
        <div>
            <input text='text' value={props.filters.text} onChange={(e)=>{
                props.dispatch(setTextFilter(e.target.value))
            }}/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
