import React from 'react'
import Counter from './Counter'

function Decrement(props) {
    console.log(props)

    const handleChange=()=>{
        props.value=props.value-1
    }

    return (
        <div>
            <button onClick={handleChange}>-</button>
            <Counter value={props.value} />
        </div>
    )
}

export default Decrement

