import dotenv from "dotenv";
import { connectDb } from "./db/index.js";
import { app } from "./app.js";
import { json } from 'express';
import router from "./routes/user.routers.js";

dotenv.config({ path: './env' });

connectDb().
    then(() => {
        app.listen(process.env.PORT, (req, res) => {
            console.log("Port is listening to : ", process.env.PORT);
        })
    }).catch((error) => {
        console.log("Error while connecting db", error);
    });


app.use(json());
app.use(router);
