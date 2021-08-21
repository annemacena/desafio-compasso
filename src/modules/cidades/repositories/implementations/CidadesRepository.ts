import { getRepository, Repository } from "typeorm";

import { ICadastrar } from "../../dtos";
import { Cidade } from "../../entities/Cidade";
import { ICidadesRepository } from "../ICidadesRepository";

export class CidadesRepository implements ICidadesRepository {
  private repository: Repository<Cidade>;

  constructor() {
    this.repository = getRepository(Cidade);
  }

  async cadastrar({ nome, estado }: ICadastrar): Promise<void> {
    const cidade = this.repository.create({ nome, estado });

    await this.repository.save(cidade);
  }

  pesquisarPorNome(nome: string): Promise<Cidade | undefined> {
    return this.repository.findOne({ nome });
  }

  pesquisarPorEstado(estado: string): Promise<Cidade[] | undefined> {
    const cidades = this.repository.find({ estado });
    return cidades;
  }

  pesquisarPorNomeEstado({
    nome,
    estado,
  }: ICadastrar): Promise<Cidade | undefined> {
    return this.repository.findOne({ nome, estado });
  }

  pesquisarPorId(id: number): Promise<Cidade | undefined> {
    return this.repository.findOne({ id });
  }
}
