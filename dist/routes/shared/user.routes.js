"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./../../controller/UserController"));
var userRoutes = express_1.Router();
exports.userRoutes = userRoutes;
userRoutes.post("/store", UserController_1.default.store);
//# sourceMappingURL=user.routes.js.map