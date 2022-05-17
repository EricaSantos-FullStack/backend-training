import {MigrationInterface, QueryRunner} from "typeorm";

import types from '../../seeders/type.json';

export class seedTypes1652458976475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (const { id, name } of types) {
            await queryRunner.query('INSERT INTO type("id", "name") VALUES ($1, $2)', [id, name]);
          }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM type`, undefined);
    }

}
