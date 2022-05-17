import {MigrationInterface, QueryRunner} from "typeorm";

export class changingSomeDetails1652732070941 implements MigrationInterface {
    name = 'changingSomeDetails1652732070941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" ADD "type_pokemon_id" integer`);
        await queryRunner.query(`ALTER TABLE "pokemon" ADD CONSTRAINT "FK_9dc2ac66682dc808f459f9664dc" FOREIGN KEY ("type_pokemon_id") REFERENCES "type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" DROP CONSTRAINT "FK_9dc2ac66682dc808f459f9664dc"`);
        await queryRunner.query(`ALTER TABLE "pokemon" DROP COLUMN "type_pokemon_id"`);
    }

}
