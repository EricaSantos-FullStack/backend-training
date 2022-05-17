import {MigrationInterface, QueryRunner} from "typeorm";

import abilities from '../../seeders/abilities.json';

export class seedAbilities1652459889786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (const { id, name } of abilities) {
            await queryRunner.query('INSERT INTO abilities("id", "name") VALUES ($1, $2)', [id, name]);
          }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM abilities`, undefined);
    }

}
