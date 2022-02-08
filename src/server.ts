import express, { Request, Response } from "express";
import authRouter from "./routers/auth";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) =>
  res.status(404).send("no link matched!")
);

export default app;
