import cors from "cors";
import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import userRouter from "./routes/user.route";
import mongoDBConnection from "./configs/mdb.config";
import globalErrorHandler from "./errors/handleGlobalError";
import generatePin from "./utils/generateOTP";
import { pinVerification } from "./middlewares/pin.verify";

dotenv.config();
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to database
mongoDBConnection.connect()

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Application working fine!",
  });
});



app.use("/api/v1/user", userRouter);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API not found",
      },
    ],
  });
});

app.use(globalErrorHandler.handle)
export default app;
