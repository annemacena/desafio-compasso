import { Response, Request } from "express";
import { container } from "tsyringe";

import { PesquisarPorIdUseCase } from "../pesquisarPorId/PesquisarPorIdUseCase";
import { AlterarNomeUseCase } from "./AlterarNomeUseCase";

class AlterarNomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { nome_completo } = request.body;

      const pesquisarPorIdUseCase = container.resolve(PesquisarPorIdUseCase);
      const alterarNomeUseCase = container.resolve(AlterarNomeUseCase);

      const cliente = await pesquisarPorIdUseCase.execute(id);
      await alterarNomeUseCase.execute({ id, nome_completo });
      cliente.nome_completo = nome_completo;

      return response.json(cliente);
    } catch (err) {
      return response.status(err.statusCode || 400).json({ error: err.message });
    }
  }
}

export { AlterarNomeController };
