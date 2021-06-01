import { Router } from 'express';
import { userRoutes } from './shared/user.routes';

const sharedRoutes = Router();

sharedRoutes.use('/user', userRoutes);

export { sharedRoutes }