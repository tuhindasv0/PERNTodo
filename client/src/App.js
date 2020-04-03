import React,{Fragment} from 'react';
import './App.css';
import InputTodos from './components/InputTodos';
import ListAllTodos from './components/ListAllTodos';

function App() {
  
  return <Fragment>
    <div className="container">
    <InputTodos/>
    <ListAllTodos/>
    </div>
    
  </Fragment>
}

export default App;
