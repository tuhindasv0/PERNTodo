import React, { Fragment,useEffect,useState } from "react";
import EditTodo from "./EditTodo";
const ListAllTodos = () => {
    const[todos,setTodos]=useState([]);
    const[status,setStatus]=useState();

    const deleteTodo=async(id) => {
        try {
            await fetch(`http://localhost:5000/todos/${id}`,
            {
                method:"DELETE"
            })

            setTodos(todos.filter(todo => todo.todo_id !==id))
        } catch (error) {
            console.error(error.message);
        }
    }


   


    const getTodos=async() => {
        try {
            const response=await fetch("http://localhost:5000/todos");
            const responseData=await response.json();

            setTodos(responseData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getTodos();
    },[]);
    
    return <Fragment>
        <table className="table table-striped">
    <thead>
      <tr>
        <th>Description</th>
        <th>Start Date</th>
        <th>Due Date</th>
        <th>Status</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
          <tr key={todo.todo_id}>
          <td>{todo.description}</td>
          <td>{todo.start_date}</td>
          <td>{todo.due_date}</td>
          <td>{todo.status} </td>
          <td><EditTodo todo={todo}/></td>
          <td><button 
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.todo_id)}
                >Delete
                </button></td>
        </tr>
      ))}
    </tbody>
  </table>
    </Fragment>;
}

export default ListAllTodos;