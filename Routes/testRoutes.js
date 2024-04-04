import express from 'express'; 
import testcontroller from '../controllers/testcontroller.js';
//router object 
const router= express.Router();  

//routes
router.post('/test-post',testcontroller); 

export default router;

