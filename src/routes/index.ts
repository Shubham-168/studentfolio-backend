import { Router } from "express";
import { about, healthCheck, version } from "../controllers/health.controller";
import ParentRoutes from './parent.routes';

const router = Router();

router.get('/health', healthCheck );

router.get('/about', about );

router.get('/version', version);

router.use('/parents', ParentRoutes);

export default router;