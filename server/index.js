const express=require("express");
const app=express();
const cors=require("cors");
const pool=require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos",async(req,res)=>{
    try {
        const {description}=req.body;
        const newTodo=await pool.query(INSERT INTO todo (description) VALUES($1),[description]);
    } catch (error) {
        console.error(error.message);
        
    }
})

app.listen(5000,() => {
    console.log("app has started");
});