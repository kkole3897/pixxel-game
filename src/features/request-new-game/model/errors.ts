export class UnsupportedStoreUrlError extends Error {
  constructor(url: string) {
    super(`Unsupported store URL: ${url}`);
    this.name = 'UnsupportedStoreUrlError';
  }
}
