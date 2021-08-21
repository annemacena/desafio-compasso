import { Response, Request } from "express";
import { container } from "tsyringe";

import { PesquisarPorNomeUseCase } from "./PesquisarPorNomeUseCase";

class PesquisarPorNomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome } = request.params;

    try {
      const pesquisarPorNomeUseCase = container.resolve(
        PesquisarPorNomeUseCase
      );
      const cidade = await pesquisarPorNomeUseCase.execute(nome);

      return response.json(cidade);
    } catch (err) {
      return response.status(err.statusCode || 400).json({ error: err.message });
    }
  }
}

export { PesquisarPorNomeController };
