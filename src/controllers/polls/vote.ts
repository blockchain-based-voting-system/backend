import { Request, Response } from "express";
import ElectionContract, { web3 } from "../../web3";
import memoryCache from "memory-cache";
import * as yup from "yup";

const schema = yup.object({
  body: yup.object({
    id: yup.string().required(),
    name: yup.string().min(3).required(),
    candidate: yup.string().min(3).required(),
  }),
});

export default async (req: Request, res: Response) => {
  try {
    await schema.validate(req);
  } catch (error) {
    return res.status(400).send({ error });
  }

  const accounts = await web3.eth.getAccounts();
  const instance = await ElectionContract.deployed();
  const voters: Array<any> = await instance.getVoters();
  const candidates: Array<any> = await instance.getCandidates();

  if (voters.includes(req.body.id))
    return res.status(400).send("already voted");

  if (!candidates.includes(req.body.candidate))
    return res.status(400).send("no such candidate");

  await instance.vote(req.body.id, req.body.name, req.body.candidate, {
    from: accounts[0],
  });

  return res.send("successful");
};
