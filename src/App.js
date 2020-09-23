import React from 'react';
import {store} from '../src/components/redux/store/configurestore'
import {Provider} from 'react-redux'
import './App.css';
import {addExpense} from '../src/components/redux/actions/expenseAction'
import AppRouter from './routers/AppRouter';
import {setTextFilter} from './components/redux/actions/filteraction';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

function App() {
  // store.dispatch(addExpense({ description : 'water bill', note : '', amount : 500, createdAt : 39999999992432 }))
  // store.dispatch(addExpense({ description : 'electricity bill', note : '', amount : 1500, createdAt : 32456456432 }))
  // store.dispatch(setTextFilter('bill'))
  // console.log(store.getState())
  return (
    // <Provider store={store}>
    <div className="App">
      <Increment />
      {/* <Decrement /> */}
    </div>
    // </Provider>
  );
}

export default App;
