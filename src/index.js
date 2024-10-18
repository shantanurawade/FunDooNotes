import dotenv from "dotenv";
import { connectDb } from "./db/index.js";
import { app } from "./App.js";
import { json } from 'express';
import routers from "./routes/index.js";
import { API_VERSION } from "./constants.js";

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
app.use(`/api/${API_VERSION}`, routers());
