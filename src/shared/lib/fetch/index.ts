export type ExtendsFetchOptions = {
  baseUrl?: string | URL;
  headers?: HeadersInit;
};

type FetchParameters = Parameters<typeof fetch>;

export function extendsFetch(
  extendOptions?: ExtendsFetchOptions
): (...args: FetchParameters) => Promise<Response> {
  return async (...args) => {
    let input: string | URL;
    let requestInit: RequestInit | undefined;
    if (args[0] instanceof Request) {
      input = new URL(args[0].url);
      const request = new Request(args[0], args[1]);
      requestInit = await new Response(request.body)
        .arrayBuffer()
        .then((body) => ({
          ...request,
          body,
          window: args[1]?.window,
        }));
    } else {
      input = args[0];
      requestInit = args[1];
    }

    if (extendOptions?.baseUrl) {
      input = new URL(input, extendOptions.baseUrl);
    }

    if (extendOptions?.headers) {
      const headers = new Headers(extendOptions.headers);
      new Headers(requestInit?.headers).forEach((value, key) => {
        headers.set(key, value);
      });
      requestInit = {
        ...requestInit,
        headers,
      };
    }

    const newArgs = [input, requestInit] as const;

    const response = await fetch(...newArgs);

    return response;
  };
}
