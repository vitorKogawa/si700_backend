import { Router } from "express";
var routes = Router();
routes.get("/teste", function (request, response) {
    return response.send("<h2>rota teste<h2>");
});
export { routes };
//# sourceMappingURL=routes.js.map