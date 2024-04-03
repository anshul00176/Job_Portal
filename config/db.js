import mongoose from "mongoose";

const connectDB= async ()=>{ 
  try {
    const conn=mongoose.connect(process.env.MONGO_URL);
    console.log("database connected successfully");
  } 
  catch (error) {
  console.log("error aagya bhai",error);  
  }
}


export default connectDB;