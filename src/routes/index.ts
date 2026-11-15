import { Router } from "express";
import { about, healthCheck, version } from "../controllers/health.controller";
import ParentRoutes from './parent.routes';
import authRoutes from "./auth.routes"

const router = Router();

router.use('/parents', ParentRoutes);
router.use('/auth', authRoutes);

export default router;
