import { Router } from "express";

import { CadastrarController } from "../modules/cidades/useCases/cadastrar/CadastrarController";
import { PesquisarPorEstadoController } from "../modules/cidades/useCases/pesquisarPorEstado/PesquisarPorEstadoController";
import { PesquisarPorNomeController } from "../modules/cidades/useCases/pesquisarPorNome/PesquisarPorNomeController";

const cidadesRoutes = Router();
const cadastrarController = new CadastrarController();
const pesquisarPorEstado = new PesquisarPorEstadoController();
const pesquisarPorNome = new PesquisarPorNomeController();

cidadesRoutes.post("/", cadastrarController.handle);
cidadesRoutes.get("/estado/:estado", pesquisarPorEstado.handle);
cidadesRoutes.get("/nome/:nome", pesquisarPorNome.handle);

export { cidadesRoutes };
