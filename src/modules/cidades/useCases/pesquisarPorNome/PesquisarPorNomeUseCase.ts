import { inject, injectable } from "tsyringe";

import Error from "../../../../utils/Error";
import { Cidade } from "../../entities/Cidade";
import { ICidadesRepository } from "../../repositories/ICidadesRepository";

@injectable()
class PesquisarPorNomeUseCase {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository
  ) {}

  async execute(nome: string): Promise<Cidade | undefined> {
    const cidade = await this.cidadesRepository.pesquisarPorNome(nome);

    if (!cidade) throw new Error("Cidade não encontrada.", 404);

    return cidade;
  }
}

export { PesquisarPorNomeUseCase };
