import { Router } from "express";
import loginController from "../controllers/auth/login";
import checkController from "../controllers/auth/check";

const router = Router();

router.post("/login", loginController);
router.post("/check", checkController);

export default router;
