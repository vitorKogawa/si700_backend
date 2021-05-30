import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection({
  type: "postgres",
  url: process.env.DATABASE_URL || "postgres://raiozevmujefuh:21a94a34f033818ba5ab3636c5ee427169e2c15f7f17e4fa40076446275e9b74@ec2-34-202-54-225.compute-1.amazonaws.com:5432/de516he89l929h",
  ssl: process.env.DATABASE_URL ? true : false,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  synchronize: false,
  logging: true,
})
  .then(() => console.log("Conectado"))
  .catch((error) => console.error(error));
