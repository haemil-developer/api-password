import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hash_tag')
export class HashTag {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: bigint;

  @Column({ unique: true })
  name: string;
}
