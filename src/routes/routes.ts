import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/teste", (request: Request, response: Response) =>
  response.send("<h2>rota teste<h2>")
);

export { routes };
