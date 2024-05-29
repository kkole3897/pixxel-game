export function sorted<T>(
  given: Array<T>,
  compareFn?: ((a: T, b: T) => number) | undefined
) {
  const copy = [...given];
  return copy.sort(compareFn);
}
