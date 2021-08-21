import { Cidade } from "../../cidades/entities/Cidade";

interface ICliente {
  id: string;
  nome_completo: string;
  sexo: string;
  data_nascimento: Date;
  idade: number;
  cidade: Cidade;
}

interface ICadastrar {
  nome_completo: string;
  sexo: string;
  data_nascimento: Date;
  idade: number;
  cidade_id: number;
}

interface IAlterarNome {
  id: string;
  nome_completo: string;
}

export { ICadastrar, IAlterarNome, ICliente };
