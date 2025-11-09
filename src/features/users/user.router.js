import { Router } from "express";
import userController from "./users.controller.js";
 


const userRouter = Router(); 
 
userRouter.post('/', userController.createUser)
userRouter.get('/:id', userController.getUserById)
userRouter.patch('/:id', userController.updateUser)

export default userRouter