import { Router } from "express";
import { Login } from "../controllers/Auth.controller.js";

const AuthRoute = Router();

AuthRoute.post("/api/auth", Login);

export { AuthRoute }