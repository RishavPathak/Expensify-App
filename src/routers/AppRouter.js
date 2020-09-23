import {BrowserRouter, Route,Switch} from 'react-router-dom'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import ExpenseDashbord from '../components/ExpenseDashbord'
import HelpExpense from '../components/HelpExpense'
import PageNotFound from '../components/PageNotFound'

// const Header=()=>{
//     <header>
//         <h1>Expesify</h1>
//         <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
//         <NavLink to='/create' activeClassName='is-active' >Create Expense</NavLink>
//         <NavLink to='/edit' activeClassName='is-active' >Edit Expense</NavLink>
//         <NavLink to='/' activeClassName='is-active' >Help</NavLink>
//     </header>
// }


import React from 'react'
import Navbar from '../components/Navbar'

function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={ExpenseDashbord} />
                        <Route path='/create' component={AddExpense} />
                        <Route path='/edit/:id' component={EditExpense} />
                        <Route path='/help' component={HelpExpense} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
