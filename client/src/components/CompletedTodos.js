import React, { Fragment,useEffect,useState } from "react";

const CompletedTodos = () => {
    const[todos,setTodos]=useState([]);


    const getTodos=async() => {
        try {
            const response=await fetch("http://localhost:5000/comletedTodos");
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
    <th>Completed On</th>
    <th>Remarks</th>
    </tr>
</thead>
<tbody>
  {todos.map(todo => (
      <tr key={todo.todo_id}>
      <td>{todo.description}</td>
      <td>{todo.start_date}</td>
      <td>{todo.due_date}</td>
      <td>{todo.remarks}</td>
      
    </tr>
  ))}
</tbody>
</table>
</Fragment>;


}

export default CompletedTodos;