require('dotenv').config();

const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

const serverData = {
  PG_DB_DATABASE: process.env.PG_DB_DATABASE,
  PG_DB_DATABASE_SEEKER: process.env.PG_DB_DATABASE_SEEKER,
  PG_DB_USERNAME: process.env.PG_DB_USERNAME,
  PG_DB_PASSWORD: process.env.PG_DB_PASSWORD,
  PG_DB_PORT: process.env.PG_DB_PORT,
  PG_DB_HOST: process.env.PG_DB_HOST,
  PG_DB_LOGGING: process.env.PG_DB_LOGGING,
  PG_SRC_PATH: process.env.PG_SRC_PATH,
};

const baseConfiguration = {
  type: 'postgres',
  host: serverData.PG_DB_HOST,
  password: serverData.PG_DB_PASSWORD,
  port: serverData.PG_DB_PORT,
  username: serverData.PG_DB_USERNAME,
  logging: false,

  entities: [`${serverData.PG_SRC_PATH}/infra/pg-models/*.{ts,js}`],
  migrations: [`${serverData.PG_SRC_PATH}/infra/migrations/default/*.{ts,js}`],
  namingStrategy: new SnakeNamingStrategy(),

  cli: {
    migrationsDir: `${serverData.PG_SRC_PATH}/infra/migrations/default`,
    entitiesDir: `${serverData.PG_SRC_PATH}/infra/pg-models`,
  },
};

module.exports = [
  {
    ...baseConfiguration,
    name: 'default',
    database: serverData.PG_DB_DATABASE,
  }
];
