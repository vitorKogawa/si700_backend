import { Router } from "express";
import { sharedRoutes } from "./shared.routes";
import { privateRoutes } from "./private.routes";

const routes = Router();

routes.use("/shared", sharedRoutes);
routes.use("/private", privateRoutes);

export { routes };
