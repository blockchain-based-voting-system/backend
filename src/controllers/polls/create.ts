import { Request, Response } from "express";
import * as yup from "yup";
import { Poll } from "../../entity/Poll";
import { Candidate } from "../../entity/Candidate";

const schema = yup.object({
  body: yup.object({
    name: yup.string().min(3).required(),
    candidates: yup.array(yup.string()),
  }),
});

export default async (req: Request, res: Response) => {
  try {
    await schema.validate(req);
  } catch (error: any) {
    return res.status(400).send(error.errors);
  }

  const candidates = [];

  for (let i = 0; i < req.body.candidates.length; i++) {
    const name = req.body.candidates[i];
    const newCandidate = new Candidate();

    newCandidate.name = name;
    await Candidate.save(newCandidate);

    candidates.push(newCandidate);
  }

  const newPoll = new Poll();
  newPoll.name = req.body.name;
  newPoll.candidates = candidates;
  await Poll.save(newPoll);

  return res.send({ poll: newPoll });
};
