import { Response, Request } from "express";
import { container } from "tsyringe";

import { PesquisarPorNomeUseCase } from "./PesquisarPorNomeUseCase";

class PesquisarPorNomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome_completo } = request.params;

    try {
      const pesquisarPorNomeUseCase = container.resolve(
        PesquisarPorNomeUseCase
      );
      const cliente = await pesquisarPorNomeUseCase.execute(nome_completo);

      return response.json(cliente);
    } catch (err) {
      return response.status(err.statusCode || 400).json({ error: err.message });
    }
  }
}

export { PesquisarPorNomeController };
