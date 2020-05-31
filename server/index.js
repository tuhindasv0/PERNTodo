const express=require("express");
const app=express();
const cors=require("cors");
const pool=require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos",async(req,res)=>{
    try {
        const {description,dueDate,startDate}=req.body;
        const newTodo=await pool.query("INSERT INTO todo (description,due_date,start_date,status) VALUES($1,$2,$3,$4) RETURNING *",[description,dueDate,startDate,"CREATED"]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
        
    }
})
app.get("/todos",async(req,res)=>{
    try {
        const todos=await pool.query("SELECT * FROM todo where status NOT IN ('COMPLETED')");
        res.json(todos.rows);
    } catch (error) {
        console.error(error.message);
        
    }
})


app.get("/comletedTodos",async(req,res)=>{
    try {
        const todos=await pool.query("SELECT * FROM todo where status='COMPLETED'");
        res.json(todos.rows);
    } catch (error) {
        console.error(error.message);
        
    }
})

app.get("/todos/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const todo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id]);
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message);
        
    }
})
app.put("/todos/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const description=req.body.description;
        const status=req.body.status;
        const updateTodo=await pool.query("UPDATE todo SET description=$2,status=$3 WHERE todo_id=$1 RETURNING *",[id,description,status]);
        res.json(updateTodo.rows[0]);
        } catch (error) {
        console.error(error.message);
        
    }
})






app.delete("/todos/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteTodo=await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]);
        res.json("Todo deleted");
    } catch (error) {
        console.error(error.message);
        
    }
})
app.listen(5000,() => {
    console.log("app has started");
});