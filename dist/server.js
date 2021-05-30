import { app } from "./app";
import "./config/env.config";
var port = parseInt(process.env.PORT);
app.listen(port, function () {
    return console.log("Servidor rodando em http://localhost:" + port);
});
//# sourceMappingURL=server.js.map