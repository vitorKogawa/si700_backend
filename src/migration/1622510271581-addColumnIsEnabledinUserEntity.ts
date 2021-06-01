import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnIsEnabledinUserEntity1622510271581 implements MigrationInterface {
    name = 'addColumnIsEnabledinUserEntity1622510271581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isEnabled" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isEnabled"`);
    }

}
