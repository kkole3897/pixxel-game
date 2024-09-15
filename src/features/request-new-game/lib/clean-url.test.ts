import { checkSteamUrl, checkEpicUrl, cleanUrl } from './clean-url';

describe('checkSteamUrl', () => {
  it('should return true for standard steam app url', () => {
    const appUrl = 'https://store.steampowered.com/app/1234567/My_Game';

    expect(checkSteamUrl(appUrl)).toBe(true);
  });

  it('should return true for steam app url with trailing slash', () => {
    const appUrl = 'https://store.steampowered.com/app/1234567/My_Game/';
    expect(checkSteamUrl(appUrl)).toBe(true);
  });

  it('should return true for steam app url with query string', () => {
    const appUrl = `https://store.steampowered.com/app/1234567/My_Game?utm_source=google&utm_medium=cpc&utm_campaign=shopping&gclid=Cj0KCQjwzYGGBhCTARIsANlgoO`;
    expect(checkSteamUrl(appUrl)).toBe(true);
  });

  it('should return true for steam app url without title slug', () => {
    const appUrl = 'https://store.steampowered.com/app/1234567';
    expect(checkSteamUrl(appUrl)).toBe(true);
  });

  it('should return true for steam app url with trailing slash but without title slug', () => {
    const appUrl = 'https://store.steampowered.com/app/1234567/';
    expect(checkSteamUrl(appUrl)).toBe(true);
  });

  it('should return true for steam bundle url', () => {
    const bundleUrl = 'https://store.steampowered.com/bundle/1234567/My_Bundle';
    expect(checkSteamUrl(bundleUrl)).toBe(true);
  });

  it('should return true for steam package url', () => {
    const packageUrl = 'https://store.steampowered.com/sub/1234567/My_Package';
    expect(checkSteamUrl(packageUrl)).toBe(true);
  });

  it('should return false when id is not exist', () => {
    const unexpectedUrl = 'https://store.steampowered.com/app';
    expect(checkSteamUrl(unexpectedUrl)).toBe(false);
  });

  it('should return false for non-steam url', () => {
    const nonSteamUrl = 'https://www.google.com';
    expect(checkSteamUrl(nonSteamUrl)).toBe(false);
  });

  it('should return false when path is not started with app, bundle or sub', () => {
    const unexpectedUrl =
      'https://store.steampowered.com/hello/1234567/My_Game';
    expect(checkSteamUrl(unexpectedUrl)).toBe(false);
  });

  it('http or https protocol is optional', () => {
    const url = 'store.steampowered.com/app/1234567/My_Game';
    expect(checkSteamUrl(url)).toBe(true);
  });

  it('http protocol is allowed', () => {
    const url = 'http://store.steampowered.com/app/1234567/My_Game';
    expect(checkSteamUrl(url)).toBe(true);
  });
});

describe('checkEpicUrl', () => {
  it('should return true for standard epic url', () => {
    const url = 'https://store.epicgames.com/p/my-game';

    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for standard epic url with trailing slash', () => {
    const url = 'https://store.epicgames.com/p/my-game/';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('shoud return true for epic url with query string', () => {
    const url = `https://store.epicgames.com/p/my-game?utm_source=google&utm_medium=cpc&utm_campaign=shopping&gclid=Cj0KCQjwzYGGBhCTARIsANlgoO`;
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('shoud return true for ko locale epic url', () => {
    const url = 'https://store.epicgames.com/ko/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for en-US locale epic url', () => {
    const url = 'https://store.epicgames.com/en-US/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for ar locale epic url', () => {
    const url = 'https://store.epicgames.com/ar/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for de locale epic url', () => {
    const url = 'https://store.epicgames.com/de/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for es-ES locale epic url', () => {
    const url = 'https://store.epicgames.com/es-ES/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for es-MX locale epic url', () => {
    const url = 'https://store.epicgames.com/es-MX/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for fr locale epic url', () => {
    const url = 'https://store.epicgames.com/fr/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for it locale epic url', () => {
    const url = 'https://store.epicgames.com/it/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for ja locale epic url', () => {
    const url = 'https://store.epicgames.com/ja/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for pl locale epic url', () => {
    const url = 'https://store.epicgames.com/pl/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for pt-BR locale epic url', () => {
    const url = 'https://store.epicgames.com/pt-BR/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for ru locale epic url', () => {
    const url = 'https://store.epicgames.com/ru/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for th locale epic url', () => {
    const url = 'https://store.epicgames.com/th/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for tr locale epic url', () => {
    const url = 'https://store.epicgames.com/tr/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for zh-CN locale epic url', () => {
    const url = 'https://store.epicgames.com/zh-CN/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return true for zh-Hant locale epic url', () => {
    const url = 'https://store.epicgames.com/zh-Hant/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('should return false for non-epic url', () => {
    const nonEpicUrl = 'https://www.google.com';
    expect(checkEpicUrl(nonEpicUrl)).toBe(false);
  });

  it('should return false when path is not started with p', () => {
    const unexpectedUrl =
      'https://store.epicgames.com/ko/browse?sortBy=releaseDate&sortDir=DESC&category=Game&count=40';
    expect(checkEpicUrl(unexpectedUrl)).toBe(false);
  });

  it('should return false when slug is not exist', () => {
    const unexpectedUrl = 'https://store.epicgames.com/p';
    expect(checkEpicUrl(unexpectedUrl)).toBe(false);
  });

  it('http or https protocol is optional', () => {
    const url = 'store.epicgames.com/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });

  it('http protocol is allowed', () => {
    const url = 'http://store.epicgames.com/p/my-game';
    expect(checkEpicUrl(url)).toBe(true);
  });
});

describe('cleanUrl', () => {
  it('standard steam app url should return same url', () => {
    const url = 'https://store.steampowered.com/app/1234567';
    const store = 'steam';

    const result = cleanUrl(url, store);

    expect(result).toBe(url);
  });

  it('standard steam bundle url should return same url', () => {
    const url = 'https://store.steampowered.com/bundle/1234567';
    const store = 'steam';

    const result = cleanUrl(url, store);

    expect(result).toBe(url);
  });

  it('standard steam package url should return same url', () => {
    const url = 'https://store.steampowered.com/sub/1234567';
    const store = 'steam';

    const result = cleanUrl(url, store);

    expect(result).toBe(url);
  });

  it('steam title slug should be removed', () => {
    const url = 'https://store.steampowered.com/app/1234567/My_Game';
    const store = 'steam';
    const correctResult = 'https://store.steampowered.com/app/1234567';

    const result = cleanUrl(url, store);

    expect(result).toBe(correctResult);
  });

  it('standard epic url should return same url', () => {
    const url = 'https://store.epicgames.com/p/my-game';
    const store = 'epic';

    const result = cleanUrl(url, store);

    expect(result).toBe(url);
  });

  it('epic locale path should be removed', () => {
    const url = 'https://store.epicgames.com/ko/p/my-game';
    const store = 'epic';
    const correctResult = 'https://store.epicgames.com/p/my-game';

    const result = cleanUrl(url, store);

    expect(result).toBe(correctResult);
  });

  it('query string should be removed', () => {
    const url =
      'https://store.steampowered.com/app/1234567/My_Game?utm_source=google&utm_medium=cpc&utm_campaign=shopping&gclid=Cj0KCQjwzYGGBhCTARIsANlgoO';
    const store = 'steam';
    const correctResult = 'https://store.steampowered.com/app/1234567';

    const result = cleanUrl(url, store);

    expect(result).toBe(correctResult);
  });

  it('trailing slash should be removed', () => {
    const url = 'https://store.steampowered.com/app/1234567/';
    const store = 'steam';
    const correctResult = 'https://store.steampowered.com/app/1234567';

    const result = cleanUrl(url, store);

    expect(result).toBe(correctResult);
  });

  it('invalid steam url should throw Error', () => {
    const url = 'https://store.steampowered.com/hello/1234567/My_Game';
    const store = 'steam';

    expect(() => cleanUrl(url, store)).toThrow();
  });

  it('invalid epic url should throw Error', () => {
    const url = 'https://store.epicgames.com/hello/my-game';
    const store = 'epic';

    expect(() => cleanUrl(url, store)).toThrow();
  });

  it('https protocol is added when missing', () => {
    const url = 'store.steampowered.com/app/1234567';
    const store = 'steam';
    const correctResult = 'https://store.steampowered.com/app/1234567';

    const result = cleanUrl(url, store);

    expect(result).toBe(correctResult);
  });

  it('http protocol is changed to https', () => {
    const url = 'http://store.steampowered.com/app/1234567';
    const store = 'steam';
    const correctResult = 'https://store.steampowered.com/app/1234567';

    const result = cleanUrl(url, store);

    expect(result).toBe(correctResult);
  });
});
