import { Router } from "express";
import UserController from "./../../controller/UserController";

const userRoutes = Router();

userRoutes.get("/findAll", UserController.findAll);
userRoutes.get("/findByID/:id", UserController.findByID);
userRoutes.put("/enableByID/:id", UserController.enableUserByID);
userRoutes.put("/disableByID/:id", UserController.disableUserByID);

export { userRoutes };