const express=require("express");
const app=express();
const cors=require("cors");
const pool=require("./db");

app.use(cors());
app.use(express.json());

app.post("/addtodo",async(req,res)=>{
    try {
        const {description}=req.body;
        const newTodo=await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
        
    }
})

app.listen(5000,() => {
    console.log("app has started");
});