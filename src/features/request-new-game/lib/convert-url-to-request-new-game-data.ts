import { RequestNewGameData, UnsupportedStoreUrlError } from '../model';

const steamUrlPattern =
  /(https?:\/\/)?store.steampowered.com\/(?<type>(app|bundle|sub))\/(?<id>\d+)(\/.*)?/;

const epicUrlPattern =
  /(https?:\/\/)?store.epicgames.com(\/(ko|en-US|ar|de|es-ES|es-MX|fr|it|ja|pl|pt-BR|ru|th|tr|zh-CN|zh-Hant))?\/p\/(?<slug>.+)(\/.*)?/;

function getDataFromSteamUrl(url: string): RequestNewGameData {
  const { type: gameType, id } = steamUrlPattern.exec(url)!.groups!;

  return {
    store: 'steam',
    slug: `${gameType}/${id}`,
  };
}

function getDataFromEpicUrl(url: string): RequestNewGameData {
  const { slug } = epicUrlPattern.exec(url)!.groups!;

  return {
    store: 'epic',
    slug,
  };
}

export function convertUrlToRequestNewGameData(
  url: string
): RequestNewGameData {
  if (steamUrlPattern.test(url)) {
    return getDataFromSteamUrl(url);
  } else if (epicUrlPattern.test(url)) {
    return getDataFromEpicUrl(url);
  }

  throw new UnsupportedStoreUrlError(url);
}
