"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
typeorm_1.createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL ||
        "postgres://uwchhypexhmjsf:c82d00b314fb872bd0ad578c14d7a1759045710e3db83588b8b1ced3a73ebd2c@ec2-3-215-57-87.compute-1.amazonaws.com:5432/d6a1g732ta78ri",
    ssl: process.env.DATABASE_URL ? true : false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
    synchronize: false,
    logging: true,
    entities: ["dist/entity/**/*.js"],
    migrations: ["dist/migration/**/*.js"],
})
    .then(function () { return console.log("Conectado"); })
    .catch(function (error) { return console.error(error); });
//# sourceMappingURL=connection.js.map