import React, { Component } from 'react'
import Decrement from './Decrement'

export class Increment extends Component {
    state={
        count:0
    }

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
 

    render() {
        return (
            <div>
        
            <button onClick={this.handleIncrement}>+</button>
            <Decrement  value={this.state.count}/>
            </div>
        )
    }
}

export default Increment
