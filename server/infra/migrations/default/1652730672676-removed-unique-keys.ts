import {MigrationInterface, QueryRunner} from "typeorm";

export class removedUniqueKeys1652730672676 implements MigrationInterface {
    name = 'removedUniqueKeys1652730672676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" DROP CONSTRAINT "UQ_a550c45dd7f1a4116c5ea378785"`);
        await queryRunner.query(`ALTER TABLE "pokemon" DROP CONSTRAINT "UQ_67ce9f41605d1150196199530f2"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" ADD CONSTRAINT "UQ_67ce9f41605d1150196199530f2" UNIQUE ("ability")`);
        await queryRunner.query(`ALTER TABLE "pokemon" ADD CONSTRAINT "UQ_a550c45dd7f1a4116c5ea378785" UNIQUE ("category")`);
    }

}
