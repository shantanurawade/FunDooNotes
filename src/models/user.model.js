import mongoose from "mongoose";


const userDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: Buffer
}, { timestamps: true });

// userDetailSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();

//     this.password = bcrypt.hash(this.password, 16)
//     next();
// })

// userDetailSchema.methods.isPasswordCorrect = async function (password) {
//     return await bcrypt.compare(password, this.password)
// }

export default mongoose.model("UserInfo", userDetailSchema);
