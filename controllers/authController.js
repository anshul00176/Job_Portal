import userModel from "../models/userModel.js";

export const authController=async(req,res)=>{ 
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

    //token 
    const token=user.createJWT();
    return res.status(201).send({ 
        message:"User created succesfully ", 
        success:true,
        user:{ 
            name:user.name, 
            email:user.email, 
            location: user.location
        },
        token
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

export const loginController = async (req,res)=>{ 
   try {
    const {email,password} = req.body; 
    if(!email){ 
        return res.status(200).send({ 
            message:"Email is required for login..", 
            success:"false"
        })
    }
    if(!password){ 
        return res.status(200).send({ 
            message:"Password is required for login..", 
            success:"false"
        })
    }

    const user= await userModel.findOne({email}); 

    if(!user){ 
        res.status(200).send({ 
            message:"Invalid credentials please login in again ", 
            success:"false"
        })
    }

    const isMatch = user.comparePassword(password); 

    if(!isMatch){ 
        res.status(200).send({ 
            message:"Invalid credentials please login in again ", 
            success:"false"
        })
    }

    const token=user.createJWT(); 

    res.status(200).json({ 
        success:"true", 
        message:"Login Successfully", 
        user, 
        token,
    })
    

   } catch (error) {
     res.status(400).send({ 
        message:"errow while login ....", 
        success:"false", 
        error
     })
   }
 

}; 

