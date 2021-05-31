"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
exports.routes = routes;
routes.get("/teste", function (request, response) {
    return response.send("<h2>rota teste<h2>");
});
//# sourceMappingURL=routes.js.map