import { inject, injectable } from "tsyringe";

import Error from "../../../../utils/Error";
import { ICidadesRepository } from "../../../cidades/repositories/ICidadesRepository";
import { ICadastrar } from "../../dtos";
import { IClienteWrapper } from "../../dtos/wrappers";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class CadastrarUseCase {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository,
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ) {}

  async execute(dadosNovoCliente: ICadastrar): Promise<void> {
    const dadosNovoClienteCopia = { ...dadosNovoCliente };
    const { cidade_id } = dadosNovoClienteCopia;
    const cidadeExistente = await this.cidadesRepository.pesquisarPorId(
      cidade_id
    );

    if (!cidadeExistente) throw new Error("Cidade/Estado não existe.", 404);

    const novoClienteWrapper = new IClienteWrapper({
      ...dadosNovoClienteCopia,
      cidade: cidadeExistente,
    });

    await this.clientesRepository.cadastrar(novoClienteWrapper.iCliente);
  }
}

export { CadastrarUseCase };
