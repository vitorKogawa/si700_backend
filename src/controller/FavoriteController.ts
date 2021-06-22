import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Favorite } from '../entity/Favorite';

class FavoriteController{
    async addFavorite (request: Request, response: Response) {
        try {
            const favoriteRepository = getRepository(Favorite);
    
            const { user_id, book_id } = request.body;
    
            await favoriteRepository.save({ user_id, book_id});
    
            return response.sendStatus(200);
            
        } catch (error) {
            console.error(error);
            return response.sendStatus(500);
        }
    }

    async removeFavorite(request: Request, response: Response){
        try {
            const favoriteRepository = getRepository(Favorite);

            const { id } = request.params;

            await favoriteRepository.createQueryBuilder().delete().from(Favorite).where("id = :id", { id }).execute();

            return response.sendStatus(200);
        } catch (error) {
            console.error(error);
            return response.sendStatus(500);
        }
    }
}

export default new FavoriteController();