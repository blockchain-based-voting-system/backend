import { Request, Response } from "express";
import * as yup from "yup";

const loginSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
  }),
});

export const loginController = async (req: Request, res: Response) => {
  try {
    await loginSchema.validate(req);
  } catch (error: any) {
    return res.status(400).send(error.errors);
  }

  return res.send("cool");
};
