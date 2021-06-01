import { Router } from 'express';
import { userRoutes } from './private/user.routes';

const privateRoutes = Router();

privateRoutes.use('/user', userRoutes);

export { privateRoutes }