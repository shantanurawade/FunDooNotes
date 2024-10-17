import * as UserServices from '../services/user.services.js'
import HttpStatus from 'http-status-codes'

export const createUser = async (req, res) => {
    try {
        const data = await UserServices.createUser(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: 'data',
            message: "User created successfully..."
        })
    }
    catch (error) {
        next(error);
    }
}

export const getUser = async (req, res) => {
    try {
        const data = await UserServices.getUser();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All users fetched successfully'
        });
    }
    catch (error) {
        next(error);
    }
}

export const userLogin = async (req, res) => {

    try {
        const data = await UserServices.userLogin(req.body);

        if (data.length > 0) res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All users fetched successfully'
        });
        else {
            res.send({ msessage: "invalid credentials" });
        }
    }
    catch (error) {
        next(error);
    }

}
