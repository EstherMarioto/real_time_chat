import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("messages")
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int" })
  userSent!: number;

  @Column({ type: "int" })
  userReceived!: number;

  @Column({ type: "text" })
  message!: string;
}
