import express from "express";

import createController from "../controllers/polls/create";
import fetchController from "../controllers/polls/fetch";

const router = express.Router();

router.get("/", fetchController);
router.post("/create", createController);

export default router;
