import { Router } from "express";
import { userRoutes } from "./shared/user.routes";
import AuthController from './../controller/AuthController'

const sharedRoutes = Router();

sharedRoutes.use("/user", userRoutes);
sharedRoutes.post("/login", AuthController.auth);

export { sharedRoutes };
