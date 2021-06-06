import "./env.config";
import { ConnectionOptions } from 'typeorm'
import { User } from "../entity/User";
import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Configurações para ambiente de desenvolvimento
 */
const development = {
  type: process.env.TYPEORM_TYPE,
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  host: process.env.TYPEORM_HOST,
  port: 3306,
  ssl:{
    ca: readFileSync(resolve(__dirname, '..', 'database', 'certificate', 'ssl', 'ssl_ca.pem'))
  },
  synchronize: false,
  logging: true,
  entities: [User]
} as ConnectionOptions;

/**
 * Configurações para ambiente de produção
 */
const production = {} as ConnectionOptions;

/**
 * Configurações para ambiente de teste
 */
const test = {} as ConnectionOptions;


const dbConfig = {} as {
  development: ConnectionOptions;
  test: ConnectionOptions;
  production: ConnectionOptions;
};

dbConfig.development = development;
dbConfig.test = test;
dbConfig.production = production;

export { dbConfig };
