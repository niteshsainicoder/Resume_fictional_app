import { Router } from "express";
import { ResumeEnrich } from "../controllers/Enrich.controller.js";
import { authMiddleware } from "../middlewares/Auth.middleware.js";

const EnrichRoute = Router();

EnrichRoute.post("/api/enrich", authMiddleware, ResumeEnrich)

export { EnrichRoute }