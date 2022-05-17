import {MigrationInterface, QueryRunner} from "typeorm";

import pokemon from '../../seeders/pokemon.json';

export class seedPokemons1652732442403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (const { id, name, description, category, ability, type_id, weakness } of pokemon) {
            await queryRunner.query('INSERT INTO pokemon("id", "name", "description", "category", "ability", "type_id", "weakness") VALUES ($1, $2, $3, $4, $5, $6, $7)', [id, name, description, category, ability, type_id, weakness]);
          }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM pokemon`, undefined);
    }
}
