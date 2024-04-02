export function toPlainObject(complexObj: object) {
  return JSON.parse(JSON.stringify(complexObj));
}
