import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routers/auth";
import pollsRouter from "./routers/polls";
import usersRouter from "./routers/users";

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/polls", pollsRouter);
app.use("/users", usersRouter);

app.post("/test", (req: any, res: any) => {
  console.log(req.headers.refreshtoken);

  res.send("nice");
});

app.get("/", (req: Request, res: Response) => {
  res.status(404).send("no link matched!");
});

export default app;
