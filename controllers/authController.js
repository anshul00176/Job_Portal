import userModel from "../models/userModel.js";

const authController=async(req,res)=>{ 
    try{ 
    const {name,email,password}= req.body;  
    if(!name){ 
       return  res.status(200).send({ 
            message:"Name is required", 
            success:false
        })
    } 
    if(!email){ 
       return  res.status(200).send({ 
            message:"Email is required", 
            success:false
        })
        return ;
    }
    if(!password){ 
        return res.status(200).send({ 
            message:"Password is required", 
            success:false
        })
       return ;
    } 
    
    const ExistingUser= await userModel.findOne({email}); 
    
    if(ExistingUser){ 
         return res.status(200).send({ 
            message:"Email already exist please login", 
            success:false
        }) 
        return ;
    }

    const user= await userModel.create({name,email,password});
    return res.status(201).send({ 
        message:"User created succesfully ", 
        success:true,
        user
    })

   }
    catch(err){ 
    console.log(err);
    res.status(400).send({ 
        message:"Error in register controller", 
        success:"false", 
        err
    })
   }
} 

export default authController;