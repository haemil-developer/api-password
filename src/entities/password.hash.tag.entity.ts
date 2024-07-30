import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Password } from './password.entity';
import { HashTag } from './hash.tag.entity';

@Entity('password_hash_tag')
export class PasswordHashTag {
  @PrimaryColumn({ type: 'bigint', name: 'password_id' })
  passwordId: number;

  @PrimaryColumn({ type: 'bigint', name: 'hash_tag_id' })
  hashTagId: number;

  @ManyToOne(() => HashTag, (hashTag) => hashTag.id)
  hashTag: HashTag;

  @ManyToOne(() => Password, (password) => password.passwordHashTags)
  password: Password;
}
