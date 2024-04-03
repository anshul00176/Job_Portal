import express from "express"; 
import dotenv from "dotenv"; 

dotenv.config();

const app=express(); 

app.get('/',(req,res)=>{ 
    res.send("job portal"); 
})

const PORT=process.env.PORT||8080;  

app.listen(PORT,(req,res)=>{ 
    console.log("app is running at port",PORT);
}) 
