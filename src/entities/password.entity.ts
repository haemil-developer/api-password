import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { PasswordHashTag } from './password.hash.tag.entity';
import { PasswordSns } from './password.sns.entity';

@Entity('password')
export class Password {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'bigint', name: 'user_id' })
  userId: number;

  @Column({ type: 'bigint', name: 'password_category_id' })
  categoryId: number;

  @Column()
  name: string;

  @Column({ name: 'login_id' })
  loginId: string;

  @Column({ name: 'login_password', nullable: true })
  loginPassword: string;

  @Column({ nullable: true })
  url: string;

  @Column({ type: 'text', nullable: true })
  memo: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'varchar', length: 255, name: 'created_by' })
  createdBy: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 255, name: 'updated_by' })
  updatedBy: string;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: 'password_category_id' })
  category: Category;

  @OneToMany(
    () => PasswordHashTag,
    (passwordHashTag) => passwordHashTag.password,
  )
  passwordHashTags: PasswordHashTag[];

  @OneToMany(() => PasswordSns, (passwordSns) => passwordSns.password)
  passwordSns: PasswordSns[];
}
