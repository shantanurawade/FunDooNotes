import { userData } from "../models/userData.js";


export const createUser = async (req, res) => {
    const { name, email, password } = req.body

    const isNewUser = await userData.findOne({ "email": `${req.body.email}` });
    if (isNewUser) {
        return res.json({
            success: false,
            message: "Email already in use, try sign-in",
        });
    }

    const user = await userData({
        name,
        email,
        password
    })
    await user.save()
    res.json(user)
}

export const getUser = async (req, res) => {
    try {
        const data = await userData.find()
        res.send({
            data,
            message: 'User fetched successfully... '

        })
    }
    catch (error) {
        console.log("Error occured : ", error);

    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await userData.find({ email, password });

        if (data.length > 0) res.send(data);
        else {
            console.log('first')
            res.send({ msessage: "invalid credentials" });
        }
    }
    catch (error) {
        console.log("Somthing went wrong :- ", error)
    }

}
