import { inject, injectable } from "tsyringe";

import Error from "../../../../utils/Error";
import { Cidade } from "../../entities/Cidade";
import { ICidadesRepository } from "../../repositories/ICidadesRepository";

@injectable()
class PesquisarPorIdUseCase {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository
  ) {}

  async execute(id: number): Promise<Cidade | undefined> {
    const cidade = await this.cidadesRepository.pesquisarPorId(id);

    if (!cidade) throw new Error("Cidade não encontrada.", 404);

    return cidade;
  }
}

export { PesquisarPorIdUseCase };
