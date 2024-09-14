export function checkSteamUrl(url: string): boolean {
  const regex =
    /https:\/\/store.steampowered.com\/(app|bundle|sub)\/\d+(\/.+)?/;
  return regex.test(url);
}
