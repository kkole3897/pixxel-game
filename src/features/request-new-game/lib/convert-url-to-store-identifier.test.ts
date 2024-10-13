import { convertUrlToStoreIdentifier } from './convert-url-to-store-identifier';

describe('convertUrlToStoreIdentifier common', () => {
  it('should throw error when url is empty', () => {
    const url = '';
    expect(() => convertUrlToStoreIdentifier(url)).toThrow();
  });

  it('should throw error when url is not a valid url', () => {
    const url = 'abc';
    expect(() => convertUrlToStoreIdentifier(url)).toThrow();
  });

  it('should throw error when url is not a supported store url', () => {
    const url = 'https://example.com';
    expect(() => convertUrlToStoreIdentifier(url)).toThrow();
  });

  it('protocol can be omitted', () => {
    const url = 'store.steampowered.com/app/123456';
    const correctResult = { store: 'steam', slug: 'app/123456' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('protocol can be http', () => {
    const url = 'http://store.steampowered.com/app/123456';
    const correctResult = { store: 'steam', slug: 'app/123456' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('query string is allowed but ignored', () => {
    const url = 'https://store.steampowered.com/app/123456?query=string';
    const correctResult = { store: 'steam', slug: 'app/123456' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });
});

describe('convertUrlToStoreIdentifier steam', () => {
  it('standard steam app url return store identifier data with steam and app slug', () => {
    const url = 'https://store.steampowered.com/app/123456';
    const correctResult = { store: 'steam', slug: 'app/123456' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('standard steam bundle url return store identifier data with steam and bundle slug', () => {
    const url = 'https://store.steampowered.com/bundle/123456';
    const correctResult = { store: 'steam', slug: 'bundle/123456' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('standard steam package url return store identifier data with steam and sub slug', () => {
    const url = 'https://store.steampowered.com/sub/123456';
    const correctResult = { store: 'steam', slug: 'sub/123456' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('steam title slug is allowed but ignored', () => {
    const url = 'https://store.steampowered.com/app/123456/title';
    const correctResult = { store: 'steam', slug: 'app/123456' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('should throw error when id is not a number in steam url', () => {
    const url = 'https://store.steampowered.com/app/abc';
    expect(() => convertUrlToStoreIdentifier(url)).toThrow();
  });

  it('should throw error when id is missing in steam url', () => {
    const url = 'https://store.steampowered.com/app/';
    expect(() => convertUrlToStoreIdentifier(url)).toThrow();
  });

  it('should throw error when path is not supported', () => {
    const url = 'https://store.steampowered.com/unsupported/123456';
    expect(() => convertUrlToStoreIdentifier(url)).toThrow();
  });
});

describe('convertUrlToStoreIdentifier epic', () => {
  it('standard epic url return store identifier data with epic and slug', () => {
    const url = 'https://store.epicgames.com/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('bundles epic url return store identifier data with epic and slug', () => {
    const url = 'https://store.epicgames.com/bundles/slug';
    const correctResult = { store: 'epic', slug: 'bundles/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale ko is allowed', () => {
    const url = 'https://store.epicgames.com/ko/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale en-US is allowed', () => {
    const url = 'https://store.epicgames.com/en-US/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale ar is allowed', () => {
    const url = 'https://store.epicgames.com/ar/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale de is allowed', () => {
    const url = 'https://store.epicgames.com/de/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale es-ES is allowed', () => {
    const url = 'https://store.epicgames.com/es-ES/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale es-MX is allowed', () => {
    const url = 'https://store.epicgames.com/es-MX/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale fr is allowed', () => {
    const url = 'https://store.epicgames.com/fr/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale it is allowed', () => {
    const url = 'https://store.epicgames.com/it/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale ja is allowed', () => {
    const url = 'https://store.epicgames.com/ja/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale pl is allowed', () => {
    const url = 'https://store.epicgames.com/pl/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale pt-BR is allowed', () => {
    const url = 'https://store.epicgames.com/pt-BR/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale ru is allowed', () => {
    const url = 'https://store.epicgames.com/ru/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale th is allowed', () => {
    const url = 'https://store.epicgames.com/th/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale tr is allowed', () => {
    const url = 'https://store.epicgames.com/tr/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale zh-CN is allowed', () => {
    const url = 'https://store.epicgames.com/zh-CN/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('locale zh-Hant is allowed', () => {
    const url = 'https://store.epicgames.com/zh-Hant/p/slug';
    const correctResult = { store: 'epic', slug: 'p/slug' };

    const result = convertUrlToStoreIdentifier(url);
    expect(result).toEqual(correctResult);
  });

  it('should throw error when slug is missing in epic url', () => {
    const url = 'https://store.epicgames.com/p/';
    expect(() => convertUrlToStoreIdentifier(url)).toThrow();
  });

  it('should throw error when path is not supported', () => {
    const url = 'https://store.epicgames.com/unsupported/slug';
    expect(() => convertUrlToStoreIdentifier(url)).toThrow();
  });
});
