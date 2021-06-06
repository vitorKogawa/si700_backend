"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./env.config");
var User_1 = require("../entity/User");
var fs_1 = require("fs");
var path_1 = require("path");
/**
 * Configurações para ambiente de desenvolvimento
 */
var development = {
    type: process.env.TYPEORM_TYPE,
    database: process.env.TYPEORM_DATABASE,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    host: process.env.TYPEORM_HOST,
    port: 3306,
    ssl: {
        ca: fs_1.readFileSync(path_1.resolve(__dirname, '..', '..', 'certificate', 'ssl', 'ssl_ca.pem'))
    },
    synchronize: false,
    logging: true,
    entities: [User_1.User]
};
/**
 * Configurações para ambiente de produção
 */
var production = {};
/**
 * Configurações para ambiente de teste
 */
var test = {};
var dbConfig = {};
exports.dbConfig = dbConfig;
dbConfig.development = development;
dbConfig.test = test;
dbConfig.production = production;
//# sourceMappingURL=database.config.js.map