import { Router } from "express";

import { AlterarNomeController } from "../modules/clientes/useCases/alterarNome/AlterarNomeController";
import { CadastrarController } from "../modules/clientes/useCases/cadastrar/CadastrarController";
import { PesquisarPorIdController } from "../modules/clientes/useCases/pesquisarPorId/PesquisarPorIdController";
import { PesquisarPorNomeController } from "../modules/clientes/useCases/pesquisarPorNome/PesquisarPorNomeController";
import { RemoverController } from "../modules/clientes/useCases/remover/RemoverController";

const clientesRoutes = Router();
const cadastrarController = new CadastrarController();
const pesquisarPorIdController = new PesquisarPorIdController();
const pesquisarPorNomeController = new PesquisarPorNomeController();
const removerController = new RemoverController();
const alterarNomeController = new AlterarNomeController();

clientesRoutes.post("/", cadastrarController.handle);
clientesRoutes.get("/id/:id", pesquisarPorIdController.handle);
clientesRoutes.get(
  "/nome_completo/:nome_completo",
  pesquisarPorNomeController.handle
);
clientesRoutes.delete("/:id", removerController.handle);
clientesRoutes.patch("/id/:id", alterarNomeController.handle);

export { clientesRoutes };
