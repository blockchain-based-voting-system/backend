import { Request, Response } from "express";
import * as yup from "yup";
import deploy from "../../ethereum/deploy";

const schema = yup.object({
  body: yup.object({
    name: yup.string().min(3).required(),
    description: yup.string().min(10).required(),
    candidates: yup.array(yup.string()),
  }),
});

export default async (req: Request, res: Response) => {
  try {
    await schema.validate(req);
  } catch (error: any) {
    return res.status(400).send(error.errors);
  }

  deploy();

  return res.send("wow");
};
