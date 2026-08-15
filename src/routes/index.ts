import { Router } from "express";
import { about, healthCheck, version } from "../controllers/health.controller";

const router = Router();

router.get('/health', healthCheck );

router.get('/about', about );

router.get('/version', version);

export default router;