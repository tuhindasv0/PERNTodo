import React, { Fragment, useState } from "react";

const EditTodo = ({todo}) => {
    
    const[description,setDescription]=useState(todo.description);
    const[status,setStatus]=useState(todo.status);
       
    const updateTodo= async(e) => {
        e.preventDefault();
        try {
            const body={description:description,
                        status:status};
         
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method:"PUT",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(body)
            })
            console.log(JSON.stringify(body))
            window.location="/";
        } catch (error) {
            console.error(error.message);
            
        }
    }

    return <Fragment>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`} >
  Edit
</button>


<div className="modal" id={`id${todo.todo_id}`}
//onClick={()=>setDescription(todo.description)}
 >
  <div className="modal-dialog">
    <div className="modal-content">

      
      <div className="modal-header">
        <h4 className="modal-title">Edit Todo</h4>
        <button type="button" className="close" data-dismiss="modal"
                onClick={()=>setDescription(todo.description)}>&times;</button>
      </div>

      
      <div className="modal-body">
        <input type="text" className="form-control" value={description}
                onChange ={e => setDescription(e.target.value)}></input>
      </div>

      <div>
      <p>status:{status}</p>
      <input
        type="radio"
        value="CREATED"
        checked={status==="CREATED"}
        onChange={e=>setStatus(e.target.value)}
      ></input>


      <input
        type="radio"
        value="INPROGRESS"
        checked={status==="INPROGRESS"}
        onChange={e=>setStatus(e.target.value)}
      ></input>


      <input
        type="radio"
        value="COMPLETED"
        checked={status==="COMPLETED"}
        onChange={e=>setStatus(e.target.value)}
      ></input>
      </div>
  
   
      
      <div className="modal-footer">
    
        <button type="button" className="btn btn-warning" data-dismiss="modal"
                onClick={e=>{updateTodo(e)}}>Save</button>
          
        <button type="button" className="btn btn-danger" data-dismiss="modal"
        onClick={()=>setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
                                }
                                
export default EditTodo;