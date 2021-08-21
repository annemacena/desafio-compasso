import { ICadastrar } from "../dtos";
import { Cidade } from "../entities/Cidade";

export interface ICidadesRepository {
  cadastrar(cidade: ICadastrar): Promise<void>;
  pesquisarPorNome(nome: string): Promise<Cidade | undefined>;
  pesquisarPorEstado(estado: string): Promise<Cidade[] | undefined>;
  pesquisarPorId(id: number): Promise<Cidade | undefined>;
  pesquisarPorNomeEstado(cidade: ICadastrar): Promise<Cidade | undefined>;
}
