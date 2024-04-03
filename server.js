import express from "express"; 
import dotenv from "dotenv"; 
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app=express(); 

app.get('/',(req,res)=>{ 
    res.send("job portal"); 
})

const PORT=process.env.PORT||8080;  

app.listen(PORT,(req,res)=>{ 
    console.log("App is running at port",PORT);
}) 
