import { app } from "./app";
import "./config/env.config";

const port = parseInt(process.env.PORT);

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
