import dotenv from "dotenv";
import express, { Express } from "express";
import userRouter from "./routes/user.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5001;

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server running at http://localhost:${port}`);
});
