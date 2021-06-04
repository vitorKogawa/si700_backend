import "./config/env.config";
import express from "express";
import { routes } from "./routes/routes";
import helmet from "helmet";
import cors from "cors";
import "./connection";

const server = express();

//middlewares
server.use(cors());
server.use(helmet());
server.use(express.json());

//routes
server.use(routes);

const port = parseInt(process.env.PORT);

server.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

