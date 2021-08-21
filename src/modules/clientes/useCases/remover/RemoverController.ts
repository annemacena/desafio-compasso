import { Response, Request } from "express";
import { container } from "tsyringe";

import { PesquisarPorIdUseCase } from "../pesquisarPorId/PesquisarPorIdUseCase";
import { RemoverUseCase } from "./RemoverUseCase";

class RemoverController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const removerIdUseCase = container.resolve(RemoverUseCase);
      const pesquisarPorIdUseCase = container.resolve(PesquisarPorIdUseCase);

      await pesquisarPorIdUseCase.execute(id);
      await removerIdUseCase.execute(id);

      return response.status(200).send();
    } catch (err) {
      return response.status(err.statusCode || 400).json({ error: err.message });
    }
  }
}

export { RemoverController };
