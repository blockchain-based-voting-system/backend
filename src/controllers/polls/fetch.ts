import { Request, Response } from "express";
import ElectionContract from "../../web3";

export default async (req: Request, res: Response) => {
  const instance = await ElectionContract.deployed();
  const title = await instance.getElectionName();
  console.log({ title });

  return res.send("haha  " + title + (await instance.getElectionDescription()));
};
