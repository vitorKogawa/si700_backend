import { Router } from "express";
import FavoriteController from "./../../controller/FavoriteController";

const favoriteRoute = Router();

favoriteRoute.post('/favoriteAdd', FavoriteController.addFavorite);
favoriteRoute.delete('/favoriteRemove', FavoriteController.removeFavorite);

export { favoriteRoute };