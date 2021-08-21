import { inject, injectable } from "tsyringe";

import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class RemoverUseCase {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ) {}

  async execute(id: string): Promise<void> {
    return this.clientesRepository.remover(id);
  }
}

export { RemoverUseCase };
