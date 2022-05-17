import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { graphqlExpress } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import { makeExecutableSchema } from 'graphql-tools';
import { apolloUploadExpress } from 'apollo-upload-server';
import NoIntrospection from 'graphql-disable-introspection';
import morgan from 'morgan';
import device from 'express-device';

import typeDefsV2 from '../graphql-v2/schema';
import resolversV2 from '../graphql-v2/resolvers';

import logger from '../logger';

const schemaV2 = makeExecutableSchema({
  typeDefs: typeDefsV2,
  resolvers: resolversV2,
});

const whitelist = ['https://rxpro.com.br', 'https://admin.rxpro.com.br', 'https://rep.rxpro.com.br'];

const corsOptions = {
  origin: process.env.APP_ENV !== 'prod' ? '*' :
    (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  // methods: ['GET', 'POST'],
};
morgan.token('query', (req) => {
  if (![req.originalUrl, req.url].includes('/graphql-v2')) {
    return '';
  }

  return req.body.query.split('{')[1].trim();
});
export default (server) => {
  const isProduction = process.env.APP_ENV === 'PROD';
  const isDevelopment = process.env.APP_ENV === 'dev';

  server.use(helmet());
  server.use(cors(corsOptions));
  server.use(morgan(':method :url/:query :status :res[content-length] - :response-time ms'));
  server.use(bodyParser.json({ limit: 1024 * 1024 * 2000, type: 'application/json' }));
  server.use(bodyParser.urlencoded({
    extended: true,
  }));
  // server.use((req, res, next) => {
  //   if (process.env.APP_ENV === 'prod') {
  //     if (req.headers['x-forwarded-proto'] !== 'https') {
  //       return res.redirect(`https://${req.headers.host}${req.url}`);
  //     }
  //     return next();
  //   }
  //   return next();
  // });
  server.use(device.capture());
  server.use(
    process.env.GRAPHQL_PATH_V2,
    apolloUploadExpress({ maxFieldSize: '20MB' }),
    graphqlExpress((req) => {
      const userDetails = {
        ip: req.headers['x-forwarded-for'],
        referer: req.headers.referer,
        userAgent: req.headers['user-agent'],
        device: req.device.type,
      };

      logger.info('GraphQL request User Details', userDetails);

      return {
        schema: schemaV2,
        context: {
          user: req.user,
          userDetails,
        },
        validationRules: isDevelopment ? [] : [NoIntrospection],
      };
    }),
  );

  if (!isProduction) {
    server.get('/playground', expressPlayground({ endpoint: process.env.GRAPHQL_PATH_V2 }));
  }

  server.get('/health', function health(req, res) {
    res.status(200).send();
  });
};
