import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import Web3 from "web3";

// import {abi} from "./contracts/Election.json"
import authRouter from "./routers/auth";
import pollsRouter from "./routers/polls";
import usersRouter from "./routers/users";

// const web3  = new Web3()
// const contract = new web3.eth.Contract([])

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/polls", pollsRouter);
app.use("/users", usersRouter);

app.get("/", (req: Request, res: Response) => {
  console.log(req.cookies);
  res.status(404).send("no link matched!");
});

export default app;
