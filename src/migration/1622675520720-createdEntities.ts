import {MigrationInterface, QueryRunner} from "typeorm";

export class createdEntities1622675520720 implements MigrationInterface {
    name = 'createdEntities1622675520720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `isEnabled` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
