
import { Router } from "express";

import { createParent, getAllParents, getParentById, updateParent, deleteParent, } from "../controllers/parent.controller";

import { authenticateParent } from "../middlewares/auth.middleware";

const router = Router();

// Public registration
router.post("/", createParent);

// Protected routes
router.get("/", authenticateParent, getAllParents);

router.get("/:id", authenticateParent, getParentById);

router.patch("/:id", authenticateParent, updateParent);

router.delete("/:id", authenticateParent, deleteParent);

export default router;
