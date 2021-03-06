# Desafio Compasso UOL
## Descrição

Aplicação produzida para o desafio proposto pela Compasso UOL. Consiste em APIs para cadastro e busca de cidades e clientes.

## Instruções

```bash
# Clona repositório
git clone https://github.com/annemacena/desafio-compasso.git

# Move para diretório do projeto
cd desafio-compasso

# Instala dependências
yarn install

# Builda e inicia os containers definidos no arquivo yml
docker-compose up

# Roda as migrations para o schema do banco de dados ser construído
yarn typeorm migration:run

# Após esse processo, é possível acessar a documentação da API com os endpoints disponíveis em: http://localhost:3333/documentacao
```

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Desafio%20Compasso%20UOL&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fannemacena%2Fdesafio-compasso%2Fmain%2FInsomnia_2021-08-21.json)
