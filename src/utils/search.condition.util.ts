import { Like } from "typeorm";

export class SearchConditionUtil {
  static equalUserId(userId: number, where: any) {
    return userId ? where.userId = userId : null;
  }

  static likeName(name: string, where: any) {
    return name ? where.name = Like(`%${name}%`) : null;
  }
}
