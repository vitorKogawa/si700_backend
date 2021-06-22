import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { jwtConfig } from './../config/jwt.config';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = hashSync(this.password, jwtConfig.salt);
  }
}

export { User };
