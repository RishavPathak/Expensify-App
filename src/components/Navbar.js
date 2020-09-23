import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <header>
                <h1>Expesify</h1>
                <NavLink exact to='/' activeClassName='is-active' >Dashboard</NavLink>
                <NavLink to='/create' activeClassName='is-active' >Create Expense</NavLink>
                <NavLink to='/help' activeClassName='is-active' >Help</NavLink>
            </header>
        </div> 
    )
}

export default Navbar
