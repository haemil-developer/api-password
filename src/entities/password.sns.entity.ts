import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Password } from './password.entity';
import { Sns } from './sns.entity';

@Entity('password_sns')
export class PasswordSns {
  @ManyToOne(() => Password, (password) => password.passwordSns)
  @JoinColumn({ name: 'password_id' })
  password: Password;

  @ManyToOne(() => Sns, (sns) => sns.id)
  @JoinColumn({ name: 'sns_id' })
  sns: Sns;
}
