import { Router } from "express";
import loginController from "../controllers/auth/login";
import checkController from "../controllers/auth/check";
import signupController from "../controllers/auth/signup";

const router = Router();

router.post("/login", loginController);
router.post("/check", checkController);
router.post("/signup", signupController);

export default router;
