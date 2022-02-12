import { Request, Response } from "express";
import { Poll } from "../../entity/Poll";

export default async (req: Request, res: Response) => {
  const polls = await Poll.find({ relations: ["candidates"] });

  res.send({ polls });
};
