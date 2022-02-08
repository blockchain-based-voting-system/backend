import { Request, Response } from "express";
import * as yup from "yup";
import { User } from "../entity/User";
import bcrypt from "bcrypt";

const loginSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
  }),
});

export const loginController = async (req: Request, res: Response) => {
  let user = null;

  // throws error when the POST-ed queries are invalide (email and password)
  try {
    await loginSchema.validate(req);
  } catch (error: any) {
    return res.status(400).send(error.errors);
  }

  // throws error if user with provided email not found
  try {
    user = await User.findOneOrFail({ email: req.body.email });
  } catch (error: any) {
    return res.status(404).send(error);
  }

  const match = await bcrypt.compare(req.body.password, user.password);
  //exits if password doesn't match
  if (!match) return res.status(400).send("password doesn't match");

  // if the code reaches here then the user is authenticated

  return res.send(user);
};
