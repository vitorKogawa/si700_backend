"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes/routes");
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
require("./connection");
var app = express_1.default();
exports.app = app;
//middlewares
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(express_1.default.json());
//routes
app.use(routes_1.routes);
//# sourceMappingURL=App.js.map