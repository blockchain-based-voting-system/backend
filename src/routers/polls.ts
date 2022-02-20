import express from "express";

import startController from "../controllers/polls/start";
import fetchController from "../controllers/polls/fetch";
import statusController from "../controllers/polls/status";
import endController from "../controllers/polls/end";
import resetController from "../controllers/polls/reset";

const router = express.Router();

router.get("/", fetchController);
router.post("/start", startController);
router.get("/status", statusController);
router.post("/end", endController);
router.post("/reset", resetController);

export default router;
