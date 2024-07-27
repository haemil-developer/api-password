import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PasswordSns {
  FACEBOOK = 'Facebook',
  X = 'Twitter',
  IG = 'Instagram',
}

@Entity('sns')
export class Sns {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'enum', enum: PasswordSns })
  name: PasswordSns;
}
