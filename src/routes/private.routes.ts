import { Router } from 'express';
import { userRoutes } from './private/user.routes';
import { favoriteRoute } from './private/favorites.routes';

const privateRoutes = Router();

privateRoutes.use('/user', userRoutes);
privateRoutes.use('/favorite', favoriteRoute);

export { privateRoutes }