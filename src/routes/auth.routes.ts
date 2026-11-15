import { Router } from "express";
import { loginParent } from "../controllers/auth.controller";

const router = Router();

router.post("/login", loginParent);

export default router;