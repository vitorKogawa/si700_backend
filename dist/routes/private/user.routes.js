"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./../../controller/UserController"));
var userRoutes = express_1.Router();
exports.userRoutes = userRoutes;
userRoutes.get("/findAll", UserController_1.default.findAll);
userRoutes.get("/findByID/:id", UserController_1.default.findByID);
userRoutes.put("/enableByID/:id", UserController_1.default.enableUserByID);
userRoutes.put("/disableByID/:id", UserController_1.default.disableUserByID);
//# sourceMappingURL=user.routes.js.map