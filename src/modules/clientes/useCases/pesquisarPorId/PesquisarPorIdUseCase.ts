import { inject, injectable } from "tsyringe";

import Error from "../../../../utils/Error";
import { ICliente } from "../../dtos";
import { IClienteWrapper } from "../../dtos/wrappers";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class PesquisarPorIdUseCase {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ) {}

  async execute(id: string): Promise<ICliente | undefined> {
    const cliente = await this.clientesRepository.pesquisarPorId(id);

    if (!cliente) throw new Error("Cliente não existe.", 404);

    const clienteWrapper = new IClienteWrapper(cliente);

    return clienteWrapper.iCliente;
  }
}

export { PesquisarPorIdUseCase };
