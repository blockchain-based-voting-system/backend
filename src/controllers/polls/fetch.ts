import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  //   let instance = await Election.deployed();

  //   const name = await instance.getElectionName();
  const name = "";
  return res.send("haha  " + name);
};
