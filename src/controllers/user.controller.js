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