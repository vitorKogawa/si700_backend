"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
require("./config/env.config");
var port = parseInt(process.env.PORT);
app_1.app.listen(port, function () {
    return console.log("Servidor rodando em http://localhost:" + port);
});
//# sourceMappingURL=server.js.map