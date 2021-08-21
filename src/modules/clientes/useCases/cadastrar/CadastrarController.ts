import { Response, Request } from "express";
import { container } from "tsyringe";

import { CadastrarUseCase } from "./CadastrarUseCase";

class CadastrarController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const cadastrarUseCase = container.resolve(CadastrarUseCase);
      await cadastrarUseCase.execute(request.body);

      return response.status(201).send();
    } catch (err) {
      return response.status(err.statusCode || 400).json({ error: err.message });
    }
  }
}

export { CadastrarController };
