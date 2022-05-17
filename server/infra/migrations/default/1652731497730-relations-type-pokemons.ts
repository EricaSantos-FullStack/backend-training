import {MigrationInterface, QueryRunner} from "typeorm";

export class relationsTypePokemons1652731497730 implements MigrationInterface {
    name = 'relationsTypePokemons1652731497730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" RENAME COLUMN "type" TO "type_id"`);
        await queryRunner.query(`ALTER TABLE "pokemon" DROP COLUMN "type_id"`);
        await queryRunner.query(`ALTER TABLE "pokemon" ADD "type_id" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" DROP COLUMN "type_id"`);
        await queryRunner.query(`ALTER TABLE "pokemon" ADD "type_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pokemon" RENAME COLUMN "type_id" TO "type"`);
    }

}
