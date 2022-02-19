import { Request, Response } from "express";
import * as yup from "yup";
import Election, { web3 } from "../../web3";

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

  const accounts = await web3.eth.getAccounts();

  const instance = await Election.deployed();

  instance.setElectionDetails(req.body.name, req.body.description, {
    from: accounts[0],
  });

  return res.send("wow");
};
