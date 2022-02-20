import { Request, Response } from "express";
import ElectionContract from "../../web3";

export default async (_: Request, res: Response) => {
  try {
    const instance = await ElectionContract.deployed();

    const status = await instance.getStatus();

    return res.send({ status });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
