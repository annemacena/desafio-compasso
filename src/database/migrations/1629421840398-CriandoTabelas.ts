import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriandoTabelas1629421840398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cidades",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            isNullable: false,
          },
          {
            name: "nome",
            type: "varchar(200)",
            isNullable: false,
          },
          {
            name: "estado",
            type: "varchar(200)",
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "clientes",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
            isNullable: false,
          },
          {
            name: "nome_completo",
            type: "varchar(200)",
            isNullable: false,
          },
          {
            name: "sexo",
            type: "varchar(15)",
            isNullable: false,
          },
          {
            name: "data_nascimento",
            type: "date",
            isNullable: false,
          },
          {
            name: "idade",
            type: "int",
            isNullable: false,
          },
          {
            name: "cidade_id",
            type: "int",
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: "cidadeCliente",
            referencedTableName: "cidades",
            referencedColumnNames: ["id"],
            columnNames: ["cidade_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clientes");
    await queryRunner.dropTable("cidades");
  }
}
