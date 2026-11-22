
import { Router } from "express";

import { createParent, getParentById, updateParent, deleteParent, } from "../controllers/parent.controller";

import { authenticateParent } from "../middlewares/auth.middleware";
import { authorizeParentAccess } from "../middlewares/authorize.middleware";

const router = Router();

// Public registration
router.post("/", createParent);

// Protected parent-specific routes
router.get(
    "/:id",
    authenticateParent,
    authorizeParentAccess,
    getParentById
);

router.patch(
    "/:id",
    authenticateParent,
    authorizeParentAccess,
    updateParent
);

router.delete(
    "/:id",
    authenticateParent,
    authorizeParentAccess,
    deleteParent
);

export default router;
