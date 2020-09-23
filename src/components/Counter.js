import React from 'react'

function Counter(props) {

    console.log(props)
    
    return (
        <div>
            <h1>counter: {props.value}</h1>
        </div>
    )
}

export default Counter
