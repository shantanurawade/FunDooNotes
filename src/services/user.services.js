import { UserInfo } from "../models/index.js";
import bcrypt from 'bcrypt'


export const createUser = async (body) => {
    const isNewUser = await UserInfo.findOne({ "email": `${body.email}` });
    if (isNewUser) {
        return res.json({
            success: false,
            message: "Email already in use, try sign-in",
        });
    }

    const hashedPassword = await bcrypt.hash(body.password, 16);

    const user = await UserInfo({
        name: body.name,
        email: body.email,
        password: hashedPassword
    })
    await user.save();
}

export const userLogin = async (body) => {

    const data = await UserInfo.findOne({ email: body.email });
    console.log(body.password, data.password);

    const isMatch = await bcrypt.compare(body.password, data.password);

    if (isMatch) return data;
    else return -1;
}

export const getUser = async () => {
    const data = await UserInfo.find();
    return data;
}


