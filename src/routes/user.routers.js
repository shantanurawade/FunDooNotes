import express from 'express';
import { createUser, getUser, userLogin } from '../controllers/user.controller.js';
import { userData } from '../models/userData.js';

const router = express.Router();

router.post('/register-user', createUser)
router.get('/get-user', getUser)
router.get('/user-login',userLogin)

export default router;
