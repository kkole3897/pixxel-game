export function composeClassNames(
  ...classNames: (string | undefined)[]
): string {
  const composed = classNames.reduce<string>((acc, cur) => {
    if (!cur) {
      return acc;
    }

    return `${acc} ${cur}`;
  }, '');

  return composed;
}
