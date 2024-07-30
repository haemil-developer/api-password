import { Like } from "typeorm";

export class SearchConditionUtil {
  static equalCategoryId(categoryId: number, where: any) {
    return categoryId ? where.categoryId = categoryId : null;
  }

  static equalId(id: number, where: any) {
    return id ? where.id = id : null;
  }

  static equalUserId(userId: number, where: any) {
    return userId ? where.userId = userId : null;
  }

  static likeLoginId(loginId: string, where: any) {
    return loginId ? where.loginId = Like(`%${loginId}%`) : null;
  }

  static likeName(name: string, where: any) {
    return name ? where.name = Like(`%${name}%`) : null;
  }
}
