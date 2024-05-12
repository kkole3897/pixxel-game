export function toPlainObject(complexObj: object) {
  return JSON.parse(JSON.stringify(complexObj));
}

export function toURLSearchParamsObject(searchParams: URLSearchParams) {
  const obj = Array.from(searchParams.entries()).reduce<{
    [key: string]: string;
  }>((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return obj;
}
