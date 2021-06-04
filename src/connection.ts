import "reflect-metadata";
import "./config/database.config";
import { createConnection } from "typeorm";
import { dbConfig } from './config/database.config';


createConnection(dbConfig.development)
  .then(() => console.log("Conectado"))
  .catch((error) => console.error(error));
