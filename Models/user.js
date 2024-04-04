import mongoose from "mongoose";
import validator from "validator";

//schema
const userSchema=new mongoose.Schema({ 
  name:{ 
    type:String,
    required:[true,"Name is Required"]
  }, 
  lastname:{ 
    type:String,
    required:[true,"Last Name is Required"]
  }, 
  email:{ 
    type:String, 
    required:[true,"Email is required"], 
    unique:true, 
    validate:validator.isEmail
  },
  password:{ 
    type:String, 
    required:[true," Password is required"],
  }, 
  location:{ 
    type:String, 
    default:Mumbai
  }. 
  {timeStamp:true}
}) 

const User = mongoose.model('User',userSchema);

export default User;