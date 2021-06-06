"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./config/database.config");
var typeorm_1 = require("typeorm");
var database_config_1 = require("./config/database.config");
typeorm_1.createConnection(database_config_1.dbConfig.development)
    .then(function () { return console.log("Conectado"); })
    .catch(function (error) { return console.error(error); });
//# sourceMappingURL=connection.js.map