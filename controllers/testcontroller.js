 const testcontroller=(req,res)=>{ 
    const {name}=req.body; 
    res.send(`Name of the user is ${name}`); 
}

 export default  testcontroller;