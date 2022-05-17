import {MigrationInterface, QueryRunner} from "typeorm";

export class pokemon1652383226938 implements MigrationInterface {
    name = 'pokemon1652383226938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "height" character varying NOT NULL, "weight" character varying NOT NULL, "category" character varying NOT NULL, "ability" character varying NOT NULL, "type" character varying NOT NULL, "weakness" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1cb8fc72a68e5a601312c642c82" UNIQUE ("name"), CONSTRAINT "UQ_05b8a5de0334227b78f888a560b" UNIQUE ("description"), CONSTRAINT "UQ_32db8fb47386835413f41c46e1a" UNIQUE ("height"), CONSTRAINT "UQ_0992d934dd3943d1c7e9d8be2ce" UNIQUE ("weight"), CONSTRAINT "UQ_a550c45dd7f1a4116c5ea378785" UNIQUE ("category"), CONSTRAINT "UQ_67ce9f41605d1150196199530f2" UNIQUE ("ability"), CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
