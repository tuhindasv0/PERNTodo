import React,{Fragment} from 'react';
import './App.css';
import InputTodos from './components/InputTodos';
import ListAllTodos from './components/ListAllTodos';
import CompletedTodos from './components/CompletedTodos';

function App() {
  
  return <Fragment>
    <div className="container">
    <InputTodos/>
    <ListAllTodos/>
    <CompletedTodos></CompletedTodos>
    </div>
    
  </Fragment>
}

export default App;
