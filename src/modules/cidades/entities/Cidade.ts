import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cidades")
export class Cidade {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  estado: string;
}
