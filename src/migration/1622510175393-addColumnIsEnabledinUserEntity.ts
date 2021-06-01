import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnIsEnabledinUserEntity1622510175393 implements MigrationInterface {
    name = 'addColumnIsEnabledinUserEntity1622510175393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isEnabled" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isEnabled"`);
    }

}
