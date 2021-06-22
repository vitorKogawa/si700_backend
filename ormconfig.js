require("./src/config/env.config");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { readFileSync } = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require("path");

module.exports = {
    type: process.env.TYPEORM_TYPE,
    database: process.env.TYPEORM_DATABASE,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    host: process.env.TYPEORM_HOST,
    port: 3306,
    ssl: {
        ca: readFileSync(resolve(__dirname, 'certificate', 'ssl', 'ssl_ca.pem'))
    },
    synchronize: false,
    logging: true,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
        entitiesDir: "src/entity/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
    },
};