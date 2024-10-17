import express from 'express';
import { createUser, getUser, userLogin } from '../controllers/user.controller.js';


const userRouter = express.Router();

userRouter.post('/register', createUser);
userRouter.get('/get', getUser);
userRouter.post('/login',userLogin);

export default userRouter;
