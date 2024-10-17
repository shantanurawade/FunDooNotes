import express from 'express';
import userRouter from './user.routers.js';

const routes = express.Router();

const routers = () => {
    routes.get('/getMsg', (req, res) => {
        res.json('Welcome');
    });
    routes.use('/user', userRouter);

    return routes;
};

export default routers;