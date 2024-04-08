import JWT from "jsonwebtoken"; 

const usersAuth=async(req,res,next)=>{ 
const authHeader=req.headers.authorization
if(!authHeader || authHeader.startsWith('Bearer')){ 
    return res.status(200).json({ 
        message:"Auth failed", 
        success:"false"
    })
}
const token= authHeader.split(' ')[1]; 
try {
    
    const payload= JWT.verify(token,process.env.JWT_SECRET);
    req.user={userId:payload.userId} 
    next();
    
} 
     catch (error) {
    return res.status(500).json({ 
      message:"Auth failed", 
      success:"false"
    })
}

} 

export default usersAuth;