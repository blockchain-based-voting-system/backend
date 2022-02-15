import { Request, Response } from "express";
import { Poll } from "../../entity/Poll";
import * as yup from "yup";

const schema = yup.object({
  params: yup.object({
    id: yup.number().integer(),
  }),
});

export default async (req: Request, res: Response) => {
  try {
    await schema.validate(req);
  } catch (error: any) {
    return res.status(400).send(error.errors);
  }

  const id: number = parseInt(req.params.id);

  try {
    const poll = await Poll.findOne({
      relations: ["candidates"],
      where: { id },
    });

    return res.send({ poll });
  } catch (error) {
    return res.status(400).send({ error });
  }
};
