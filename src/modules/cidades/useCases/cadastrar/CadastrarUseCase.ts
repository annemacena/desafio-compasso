import { inject, injectable } from "tsyringe";

import Error from "../../../../utils/Error";
import { ICadastrar } from "../../dtos";
import { ICidadesRepository } from "../../repositories/ICidadesRepository";

@injectable()
class CadastrarUseCase {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository
  ) {}

  async execute(novaCidade: ICadastrar): Promise<void> {
    const cidade = await this.cidadesRepository.pesquisarPorNomeEstado(
      novaCidade
    );

    if (cidade) throw new Error("Cidade/Estado já existe.", 404);

    await this.cidadesRepository.cadastrar(novaCidade);
  }
}

export { CadastrarUseCase };
