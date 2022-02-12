import express from "express";
import all from "../controllers/polls/all";
import create from "../controllers/polls/create";

const router = express.Router();

router.get("/", all);
router.post("/create", create);

export default router;
