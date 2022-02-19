import express from "express";

import allController from "../controllers/polls/all";
import createController from "../controllers/polls/create";
import eachController from "../controllers/polls/each";

const router = express.Router();

router.get("/", allController);
router.post("/create", createController);
router.get("/:id", eachController);

export default router;
