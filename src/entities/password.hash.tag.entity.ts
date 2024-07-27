import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Password } from './password.entity';
import { HashTag } from './hash.tag.entity';

@Entity('password_hash_tag')
export class PasswordHashTag {
  @ManyToOne(() => Password, (password) => password.passwordHashTags)
  @JoinColumn({ name: 'password_id' })
  password: Password;

  @ManyToOne(() => HashTag, (hashTag) => hashTag.id)
  @JoinColumn({ name: 'hash_tag_id' })
  hashTag: HashTag;
}
