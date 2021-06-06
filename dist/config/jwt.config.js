"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./env.config");
var jwtConfig = {
    secret: process.env.JWT_SECRET,
    salt: parseInt(process.env.JWT_SALT),
};
exports.jwtConfig = jwtConfig;
//# sourceMappingURL=jwt.config.js.map