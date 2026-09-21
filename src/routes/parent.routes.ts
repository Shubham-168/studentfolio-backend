import { Router } from "express";
import { createParent, getAllParents, getParentById } from "../controllers/parent.controller";

const router = Router();

router.get('/', getAllParents);
router.get('/:id', getParentById);
router.post('/', createParent);
                                       
export default router;