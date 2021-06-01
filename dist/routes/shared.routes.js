"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = require("./shared/user.routes");
var sharedRoutes = express_1.Router();
exports.sharedRoutes = sharedRoutes;
sharedRoutes.use('/user', user_routes_1.userRoutes);
//# sourceMappingURL=shared.routes.js.map