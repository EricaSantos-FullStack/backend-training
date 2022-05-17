import {MigrationInterface, QueryRunner} from "typeorm";

export class deleteWeight1652710549673 implements MigrationInterface {
    name = 'deleteWeight1652710549673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" DROP CONSTRAINT "UQ_0992d934dd3943d1c7e9d8be2ce"`);
        await queryRunner.query(`ALTER TABLE "pokemon" DROP COLUMN "weight"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" ADD "weight" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pokemon" ADD CONSTRAINT "UQ_0992d934dd3943d1c7e9d8be2ce" UNIQUE ("weight")`);
    }

}
