import { Response, Request } from "express";
import { container } from "tsyringe";

import { PesquisarPorEstadoUseCase } from "./PesquisarPorEstadoUseCase";

class PesquisarPorEstadoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { estado } = request.params;

    try {
      const pesquisarPorEstadoUseCase = container.resolve(
        PesquisarPorEstadoUseCase
      );
      const cidades = await pesquisarPorEstadoUseCase.execute(estado);

      return response.json(cidades);
    } catch (err) {
      return response.status(err.statusCode || 400).json({ error: err.message });
    }
  }
}

export { PesquisarPorEstadoController };
