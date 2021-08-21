import { Response, Request } from "express";
import { container } from "tsyringe";

import { PesquisarPorIdUseCase } from "./PesquisarPorIdUseCase";

class PesquisarPorIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const pesquisarPorIdUseCase = container.resolve(PesquisarPorIdUseCase);
      const cliente = await pesquisarPorIdUseCase.execute(id);

      return response.json(cliente);
    } catch (err) {
      return response.status(err.statusCode || 400).json({ error: err.message });
    }
  }
}

export { PesquisarPorIdController };
