import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Cidade } from "../../cidades/entities/Cidade";

@Entity("clientes")
export class Cliente {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome_completo: string;

  @Column()
  sexo: string;

  @Column()
  data_nascimento: Date;

  @Column()
  idade: number;

  @Column()
  cidade_id: number;

  @OneToOne(() => Cidade)
  @JoinColumn({ name: "cidade_id" })
  cidade: Cidade;
}
