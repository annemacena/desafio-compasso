import { inject, injectable } from "tsyringe";

import { IAlterarNome } from "../../dtos";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class AlterarNomeUseCase {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ) {}

  async execute(dados: IAlterarNome): Promise<void> {
    return this.clientesRepository.alterarNome(dados);
  }
}

export { AlterarNomeUseCase };
