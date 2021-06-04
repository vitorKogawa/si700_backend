import { Router } from 'express';
import UserController from './../../controller/UserController';

const userRoutes = Router();

userRoutes.post("/store", UserController.store);

export { userRoutes };