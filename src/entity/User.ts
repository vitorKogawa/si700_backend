import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  PrimaryColumn,
} from "typeorm";
import { hashSync } from "bcryptjs";

@Entity()
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isEnabled: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = hashSync(this.password, 8);
  }
}

export { User };
