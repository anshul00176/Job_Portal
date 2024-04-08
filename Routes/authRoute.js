import express from "express"; 
import {authController,loginController} from "../controllers/authController.js";
import authMiddleware from "../Middleware/authMiddleware.js"

const router=express.Router(); 

router.post('/register',authController); 

router.get('/login',authMiddleware,loginController);

export default router;