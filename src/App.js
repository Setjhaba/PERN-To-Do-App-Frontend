import React, { Fragment } from 'react';
import './App.css';


//components
import InputToDo from './InputToDo'
import ListToDos from './ListToDos'

function App() {
  return (
  <Fragment>
    <div className='container'>
      <InputToDo />
      <ListToDos />
    </div>
  </Fragment>
  );
}

export default App;
