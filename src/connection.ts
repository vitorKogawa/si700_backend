import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection({
  type: "postgres",
  url:
    process.env.DATABASE_URL ||
    "postgres://uwchhypexhmjsf:c82d00b314fb872bd0ad578c14d7a1759045710e3db83588b8b1ced3a73ebd2c@ec2-3-215-57-87.compute-1.amazonaws.com:5432/d6a1g732ta78ri",
  ssl: process.env.DATABASE_URL ? true : false,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  synchronize: false,
  logging: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
})
  .then(() => console.log("Conectado"))
  .catch((error) => console.error(error));
