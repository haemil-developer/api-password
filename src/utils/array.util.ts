export class ArrayUtil {

  static isEmptyArray(arr: any[] | void): boolean {
    return Array.isArray(arr) && arr.length === 0;
  }
}
