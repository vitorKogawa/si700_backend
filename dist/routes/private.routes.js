"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = require("./shared/user.routes");
var privateRoutes = express_1.Router();
exports.privateRoutes = privateRoutes;
privateRoutes.use('/user', user_routes_1.userRoutes);
//# sourceMappingURL=private.routes.js.map