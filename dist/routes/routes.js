"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var shared_routes_1 = require("./shared.routes");
var private_routes_1 = require("./private.routes");
var routes = express_1.Router();
exports.routes = routes;
routes.use("/shared", shared_routes_1.sharedRoutes);
routes.use("/private", private_routes_1.privateRoutes);
//# sourceMappingURL=routes.js.map