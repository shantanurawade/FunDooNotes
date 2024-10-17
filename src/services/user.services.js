import { UserInfo } from "../models/index.js";


export const createUser = async (body) => {
    const isNewUser = await UserInfo.findOne({ "email": `${body.email}` });
    if (isNewUser) {
        return res.json({
            success: false,
            message: "Email already in use, try sign-in",
        });
    }

    const user = await UserInfo({
        name: body.name,
        email: body.email,
        password: body.password
    })
    await user.save();
}

export const userLogin = async (body) => {
    const data = UserInfo.find(body.email, body.password);
    return data;
}

export const getUser = async () => {
    const data = await UserInfo.find();
    return data;
}