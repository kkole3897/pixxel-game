import { checkSteamUrl } from './clean-url';

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
