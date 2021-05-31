import express from "express";
import { routes } from "./routes/routes";
import helmet from "helmet";
import cors from "cors";
import "./connection";

const app = express();

//middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

//routes
app.use(routes);

export { app };
