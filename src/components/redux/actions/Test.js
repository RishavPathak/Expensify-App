import React, { Component } from 'react'

export class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greet:'hello'
        }
    }

    handleClick=()=>{
        this.setState(()=>{
            greet:'hi'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.greet}</h1>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default Test
