import { inject, injectable } from "tsyringe";

import Error from "../../../../utils/Error";
import { ICliente } from "../../dtos";
import { IClienteWrapper } from "../../dtos/wrappers";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class PesquisarPorNomeUseCase {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ) {}

  async execute(nome_completo: string): Promise<ICliente | undefined> {
    const cliente = await this.clientesRepository.pesquisarPorNome(
      nome_completo
    );

    if (!cliente) throw new Error("Cliente não existe.", 404);

    const clienteWrapper = new IClienteWrapper(cliente);

    return clienteWrapper.iCliente;
  }
}

export { PesquisarPorNomeUseCase };
