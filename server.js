//package import 
import express from "express"; 
import dotenv from "dotenv"; 
import cors from "cors"; 
import morgan from "morgan";
//file import 
import connectDB from "./config/db.js";
//route import
import testRoutes from "./Routes/testRoutes.js"; 
import authRoute from "./Routes/authRoute.js"

dotenv.config();

connectDB();

const app=express(); 

//middlewares **********************'*
app.use(express.json());
app.use(cors()); 
app.use(morgan("dev"));

app.use('/app/v1/test',testRoutes);
app.use('/auth/v1/auth',authRoute)

const PORT=process.env.PORT||8080;  

app.listen(PORT,(req,res)=>{ 
    console.log("App is running at port",PORT);
}) 
