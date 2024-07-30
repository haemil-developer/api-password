import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Password } from './password.entity';
import { Sns } from './sns.entity';

@Entity('password_sns')
export class PasswordSns {
  @PrimaryColumn({ type: 'bigint', name: 'password_id' })
  passwordId: number;

  @PrimaryColumn({ type: 'bigint', name: 'sns_id' })
  snsId: number;

  @ManyToOne(() => Sns, (sns) => sns.id)
  sns: Sns;

  @ManyToOne(() => Password, (password) => password.passwordSns)
  password: Password;
}
