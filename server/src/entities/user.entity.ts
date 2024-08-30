import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 225 })
  name!: string;

  @Column({ type: "varchar", length: 225 })
  email!: string;

  @Column({ type: "varchar", length: 225 })
  password!: string;

  @Column({ type: "text" })
  image!: string;
}
