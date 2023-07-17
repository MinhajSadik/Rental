import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});