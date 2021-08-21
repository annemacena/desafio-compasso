import { getRepository, Repository } from "typeorm";

import { ICliente, IAlterarNome } from "../../dtos";
import { Cliente } from "../../entities/Cliente";
import { IClientesRepository } from "../IClientesRepository";

export class ClientesRepository implements IClientesRepository {
  private repository: Repository<Cliente>;

  constructor() {
    this.repository = getRepository(Cliente);
  }

  async cadastrar(novoCliente: ICliente): Promise<void> {
    const cliente = this.repository.create(novoCliente);
    await this.repository.save(cliente);
  }

  pesquisarPorNome(nome_completo: string): Promise<Cliente | undefined> {
    return this.repository.findOne(
      { nome_completo },
      { relations: ["cidade"] }
    );
  }

  pesquisarPorId(id: string): Promise<Cliente | undefined> {
    return this.repository.findOne({ id }, { relations: ["cidade"] });
  }

  async remover(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async alterarNome(dados: IAlterarNome): Promise<void> {
    const { id, nome_completo } = dados;
    await this.repository.update({ id }, { nome_completo });
  }
}
