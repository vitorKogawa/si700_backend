"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
require("./config/env.config");
var port = parseInt(process.env.PORT);
App_1.app.listen(port, function () {
    return console.log("Servidor rodando em http://localhost:" + port);
});
//# sourceMappingURL=server.js.map