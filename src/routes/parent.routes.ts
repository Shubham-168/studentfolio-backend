import { Router } from "express";
import { createParent, getAllParents, getParentById, updateParent } from "../controllers/parent.controller";

const router = Router();

router.get('/', getAllParents);
router.get('/:id', getParentById);
router.post('/', createParent);
router.put("/:id", updateParent);
                                       
export default router;