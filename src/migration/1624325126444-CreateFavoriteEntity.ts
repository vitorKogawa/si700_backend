import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFavoriteEntity1624325126444 implements MigrationInterface {
    name = 'CreateFavoriteEntity1624325126444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `favorite` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `book_id` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `favorite`");
    }
}
