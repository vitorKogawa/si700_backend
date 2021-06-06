"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = require("./shared/user.routes");
var AuthController_1 = __importDefault(require("./../controller/AuthController"));
var sharedRoutes = express_1.Router();
exports.sharedRoutes = sharedRoutes;
sharedRoutes.use("/user", user_routes_1.userRoutes);
sharedRoutes.post("/login", AuthController_1.default.auth);
//# sourceMappingURL=shared.routes.js.map