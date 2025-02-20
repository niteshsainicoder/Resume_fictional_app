import { Router } from "express";
import { searchResume } from "../controllers/Search.controller.js";
import { authMiddleware } from "../middlewares/Auth.middleware.js";

const searchRoute = Router();

searchRoute.post("/api/search", authMiddleware, searchResume)

export { searchRoute }
