import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import userRouter from "../routes/user.route";

dotenv.config();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => { 
    return res.status(200).json({
        message: "Application working fine!"
    })
})

app.use("/user", userRouter);

export default app;