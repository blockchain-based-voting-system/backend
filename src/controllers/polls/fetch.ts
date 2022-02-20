import { Request, Response } from "express";
import ElectionContract from "../../web3";

export default async (req: Request, res: Response) => {
  try {
    const instance = await ElectionContract.deployed();
    const title = await instance.getElectionName();

    return res.send(
      "haha  " + title + (await instance.getElectionDescription())
    );
  } catch (error) {
    return res.status(500).send({ error });
  }
};
