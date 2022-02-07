import { Request, Response, Router } from "express";
import Yup from "yup";

const router = Router();

const loginSchema = Yup.object({
  body: Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(3).required(),
  }),
});

router.post("/login", (req: Request, res: Response) => {});

router.post("/signup", (req: Request, res: Response) => {
  res.send("haha");
});

export default router;
