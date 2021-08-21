import { inject, injectable } from "tsyringe";

import { Cidade } from "../../entities/Cidade";
import { ICidadesRepository } from "../../repositories/ICidadesRepository";

@injectable()
class PesquisarPorEstadoUseCase {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository
  ) {}

  async execute(nome: string): Promise<Cidade[] | undefined> {
    return this.cidadesRepository.pesquisarPorEstado(nome);
  }
}

export { PesquisarPorEstadoUseCase };
