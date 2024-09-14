export function checkSteamUrl(url: string): boolean {
  const regex =
    /https:\/\/store.steampowered.com\/(app|bundle|sub)\/\d+(\/.+)?/;
  return regex.test(url);
}

export function checkEpicUrl(url: string): boolean {
  const regex =
    /https:\/\/store.epicgames.com(\/(ko|en-US|ar|de|es-ES|es-MX|fr|it|ja|pl|pt-BR|ru|th|tr|zh-CN|zh-Hant))?\/p(\/.+)?/;
  return regex.test(url);
}
