import { Response, Request } from "express";
import { container } from "tsyringe";

import { PesquisarPorIdUseCase } from "./PesquisarPorIdUseCase";

class PesquisarPorIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const pesquisarPorId = container.resolve(PesquisarPorIdUseCase);
      const cidade = await pesquisarPorId.execute(parseInt(id, 10));

      return response.json(cidade);
    } catch (err) {
      return response.status(err.statusCode || 400).json({ error: err.message });
    }
  }
}

export { PesquisarPorIdController };
