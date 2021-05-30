"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes/routes");
var helmet = require("helmet");
var cors = require("cors");
require("./index");
var app = express();
exports.app = app;
//middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
//routes
app.use(routes_1.routes);
//# sourceMappingURL=App.js.map