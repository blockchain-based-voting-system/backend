import express from "express";
import all from "../controllers/polls/all";
import create from "../controllers/polls/create";
import each from "../controllers/polls/each";

const router = express.Router();

router.get("/", all);
router.post("/create", create);
router.get("/:id", each);

export default router;
