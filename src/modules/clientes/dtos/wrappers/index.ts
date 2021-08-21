import { ICliente } from "../index";

class IClienteWrapper {
  public iCliente: ICliente;

  constructor(dados: ICliente) {
    this.iCliente = {
      id: dados.id,
      nome_completo: dados.nome_completo,
      sexo: dados.sexo,
      data_nascimento: dados.data_nascimento,
      idade: dados.idade,
      cidade: dados.cidade,
    };
  }
}

export { IClienteWrapper };
