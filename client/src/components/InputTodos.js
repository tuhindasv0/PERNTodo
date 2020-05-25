import React,{Fragment,useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const InputTodos=() => {
    const [description,setDescription]=useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState("");
    const onSubmitForm =async(e) => {
        console.log("oooo");
        e.preventDefault();
        try {
            console.log("ppppp");
            const body={description,dueDate,startDate};
            console.log(body);
            await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location="/";
        } catch (err) {
            console.error(err.message);
            
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern ToDo list</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input type="text" className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                <button className="btn btn-success">ADD</button>
            </form>
            <DatePicker
            dateFormat="dd/MM/yyyy"
             selected={startDate} 
             onChange={date => setStartDate(date)} 
              />
             <DatePicker
             dateFormat="dd/MM/yyyy"
             selected={dueDate} 
             onChange={date => setDueDate(date)} 
             placeholderText="Enter Due Date"
             />
        </Fragment>
    );
}

export default InputTodos;