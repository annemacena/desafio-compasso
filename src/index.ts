import "./database";
import "./shared/container";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { cidadesRoutes } from "./routes/cidades.routes";
import { clientesRoutes } from "./routes/clientes.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/clientes", clientesRoutes);
app.use("/cidades", cidadesRoutes);

export { app };
