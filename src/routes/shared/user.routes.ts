import { Router } from 'express';
import UserController from './../../controller/UserController';

const userRoutes = Router();

userRoutes.post("/create", UserController.store);

export { userRoutes };