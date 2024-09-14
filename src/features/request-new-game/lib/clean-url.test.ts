import { checkSteamUrl, checkEpicUrl } from './clean-url';

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

  it('should return false for non-steam url', () => {
    const nonSteamUrl = 'https://www.google.com';
    expect(checkSteamUrl(nonSteamUrl)).toBe(false);
  });

  it('should return false when path is not started with app, bundle or sub', () => {
    const unexpectedUrl =
      'https://store.steampowered.com/hello/1234567/My_Game';
    expect(checkSteamUrl(unexpectedUrl)).toBe(false);
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
});
