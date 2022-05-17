/* eslint-disable no-console */
// import mongoose from 'mongoose';
import { createConnection, getConnectionOptions } from 'typeorm';

import logger from '../logger';

try {
  getConnectionOptions('default')
    .then(async (options) => {
      createConnection({ ...options, migrations: [] })
        .catch(error => logger.error(error));
      logger.info(`Connected to database: ${options.name}`);
    });
} catch (error) {
  throw error;
}
