/* eslint-disable no-console */
import './infra/config/database';
import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv';

dotenv.config();

import middleware from './infra/config/middleware';
import logger from './infra/logger';

const server = express();

middleware(server);

const graphQLServer = createServer(server);

if (!module.parent) {
  graphQLServer.listen(process.env.PORT, (err) => {
    if (err) {
      logger.error('SERVER ERROR:');
      return logger.error(err);
    }
    return logger.info(`servers listening port: ${process.env.PORT}`);
  });
}

export default server;
