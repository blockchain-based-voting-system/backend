import { Request, Response } from "express";
import ElectionContract, { web3 } from "../../web3";

export default async (_: Request, res: Response) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const instance = await ElectionContract.deployed();

    const status = await instance.getStatus();

    if (status !== "finished")
      return res.status(400).send("election not finished or already reset");

    instance.resetElection({ from: accounts[0] });

    return res.send("successful");
  } catch (error) {
    return res.status(500).send({ error });
  }
};
