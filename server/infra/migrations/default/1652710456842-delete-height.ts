import {MigrationInterface, QueryRunner} from "typeorm";

export class deleteHeight1652710456842 implements MigrationInterface {
    name = 'deleteHeight1652710456842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" DROP CONSTRAINT "UQ_32db8fb47386835413f41c46e1a"`);
        await queryRunner.query(`ALTER TABLE "pokemon" DROP COLUMN "height"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" ADD "height" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pokemon" ADD CONSTRAINT "UQ_32db8fb47386835413f41c46e1a" UNIQUE ("height")`);
    }

}
