"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env.config");
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes/routes");
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
require("./connection");
var server = express_1.default();
//middlewares
server.use(cors_1.default());
server.use(helmet_1.default());
server.use(express_1.default.json());
//routes
server.use(routes_1.routes);
var port = parseInt(process.env.PORT);
server.listen(port, function () {
    return console.log("Servidor rodando em http://localhost:" + port);
});
//# sourceMappingURL=server.js.map