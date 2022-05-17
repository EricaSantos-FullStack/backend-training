import {MigrationInterface, QueryRunner} from "typeorm";

import weakness from '../../seeders/weakness.json';

export class seedWeakness1652471497413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (const { id, name } of weakness) {
            await queryRunner.query('INSERT INTO weakness("id", "name") VALUES ($1, $2)', [id, name]);
          }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM weakness`, undefined);
    }

}
