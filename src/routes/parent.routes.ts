import { Router } from "express";
import { createParent } from "../controllers/parent.controller";

const router = Router();

router.post('/', createParent);

export default router;