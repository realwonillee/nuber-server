import { verificationTarget } from "src/types/types";
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./User";

const PHONE: string = "PHONE";
const EMAIL: string = "EMAIL";

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", enum: [PHONE, EMAIL] })
  target: verificationTarget;

  @Column({ type: "text" })
  payload: string;

  @Column({ type: "text" })
  key: string;

  @Column({ type: "boolean", default: false })
  used: boolean;

  @ManyToMany(type => User, user => user.verifications)
  user: User;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @BeforeInsert()
  createKey(): void {
    if (this.target === PHONE) {
      this.key = Math.floor(Math.random() * 100000).toString();
    } else {
      this.key = Math.random()
        .toString(36)
        .substr(2);
    }
  }
}

export default Verification;
