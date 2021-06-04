require("./src/config/env.config");

module.exports = {
    "type": process.env.TYPEORM_TYPE,
    "database": process.env.TYPEORM_DATABASE,
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "host": process.env.TYPEORM_HOST,
    "port": 3306,
    "synchronize": false,
    "logging": true,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}