const express=require("express");
const app=express();
const cors=require("cors");
const pool=require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos",async(req,res)=>{
    try {
        const {description}=req.body;
        const newTodo=await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
        
    }
})
app.get("/todos",async(req,res)=>{
    try {
        const todos=await pool.query("SELECT * FROM todo");
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
        const {description}=req.body;
        const updateTodo=await pool.query("UPDATE todo SET description=$2 WHERE todo_id=$1 RETURNING *",[id,description]);
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