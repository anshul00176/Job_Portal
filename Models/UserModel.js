import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"; 
import JWT from "jsonwebtoken";

//schema
const userSchema=new mongoose.Schema({ 
  name:{ 
    type:String,
    required:[true,"Name is Required"]
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
    default:"Mumbai"
  }
},  
  { timestamps: true }
);

//middleware 
//arrow function doesnot work here 
userSchema.pre('save', async function() { 
  const salt= await bcrypt.genSalt(10); 
  this.password = await bcrypt.hash(this.password,salt); 
});

//json web token
userSchema.methods.createJWT=function(){ 
  return JWT.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

userSchema.methods.comparePassword=async function (password){ 
  const isMatch=bcrypt.compare(password,this.password); 
  return isMatch;
}

export default mongoose.model("User", userSchema);
