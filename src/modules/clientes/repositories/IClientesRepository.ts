import { IAlterarNome, ICliente } from "../dtos";
import { Cliente } from "../entities/Cliente";

export interface IClientesRepository {
  cadastrar(cliente: ICliente): Promise<void>;
  pesquisarPorNome(nome_completo: string): Promise<Cliente | undefined>;
  pesquisarPorId(id: string): Promise<Cliente | undefined>;
  remover(id: string): Promise<void>;
  alterarNome(dados: IAlterarNome): Promise<void>;
}
