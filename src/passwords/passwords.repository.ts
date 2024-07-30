import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Password} from "../entities/password.entity";
import {Repository} from "typeorm";
import {SearchPasswordDto} from "./dto/search.password.dto";
import {SearchConditionUtil} from "../utils/search.condition.util";
import {AddPasswordDto} from "./dto/add.password.dto";
import {UpdatePasswordDto} from "./dto/update.password.dto";

@Injectable()
export class PasswordsRepository {
  constructor(
    @InjectRepository(Password)
    private password: Repository<Password>
  ) {}

  save(addPasswordDto: AddPasswordDto) {
    const password = this.password.create({
      ...addPasswordDto,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return this.password.save(password);
  }

  findOneByPk(id: number) {
    return this.password
      .findOneBy({id})
      .then((password) => {
        return password;
      })
      .catch((e) => {
        throw e;
      });
  }

  findAll(condition: SearchPasswordDto) {
    const where = {};
    SearchConditionUtil.equalUserId(condition.userId, where);
    SearchConditionUtil.equalCategoryId(condition.categoryId, where);
    SearchConditionUtil.likeName(condition.name, where);
    SearchConditionUtil.likeLoginId(condition.loginId, where);

    return this.password
      .find(where)
      .then((password) => {
        return password;
      })
      .catch((e) => {
        throw e;
      });
  }

  async update(updatePasswordDto: UpdatePasswordDto) {
    const existingPassword = await this.findOneByPk(updatePasswordDto.id);
    if (!existingPassword) throw new Error();

    if(!updatePasswordDto.categoryId) existingPassword.categoryId = updatePasswordDto.categoryId;
    if(!updatePasswordDto.name) existingPassword.name = updatePasswordDto.name;
    if(!updatePasswordDto.loginId) existingPassword.loginId = updatePasswordDto.loginId;
    if(!updatePasswordDto.loginPassword) existingPassword.loginPassword = updatePasswordDto.loginPassword;

    await this.save(existingPassword);
  }

  delete(id: number) {
    return this.password.delete(id).catch((e) => { throw e; })
  }
}
