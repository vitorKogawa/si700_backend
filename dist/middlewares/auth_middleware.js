"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var jwt_config_1 = require("./../config/jwt.config");
function authMiddleware(request, response, next_function) {
    var authorization = request.headers.authorization;
    //verificando se existe o módulo de autenticação no cabeçalho de requisição
    if (!authorization)
        return response.sendStatus(401);
    var token = authorization.replace("Bearer", "").trim();
    try {
        var data = jsonwebtoken_1.verify(token, jwt_config_1.jwtConfig.secret);
        next_function();
    }
    catch (_a) {
        return response.sendStatus(401);
    }
}
exports.default = authMiddleware;
//# sourceMappingURL=auth_middleware.js.map