import express, { Request, Response } from "express";
import authRouter from "./src/routers/auth";

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) =>
  res.status(404).send("no link matched!")
);

app.listen(port, () => console.log(`listening on port ${port} ... `));
