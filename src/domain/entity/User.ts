import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { PersistentEntity } from "./PersistentEntity";

@Entity({ name: "users" })
@Unique(["email"])
export class User extends PersistentEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;
}
