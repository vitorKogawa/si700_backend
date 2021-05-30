import * as express from "express";
import { routes } from "./routes/routes";
import * as helmet from "helmet";
import * as cors from "cors";
import "./connection";

const app = express();

//middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

//routes
app.use(routes);

export { app };
