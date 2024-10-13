import {
  RequestedGameStoreIdentifier,
  UnsupportedStoreUrlError,
} from '../model';

const steamUrlPattern =
  /(https?:\/\/)?store.steampowered.com\/(?<type>(app|bundle|sub))\/(?<id>\d+)(\/.*)?/;

const epicUrlPattern =
  /(https?:\/\/)?store.epicgames.com(\/(ko|en-US|ar|de|es-ES|es-MX|fr|it|ja|pl|pt-BR|ru|th|tr|zh-CN|zh-Hant))?\/(?<type>(p|bundles))\/(?<slug>.+)(\/.*)?/;

function getIndentifierFromSteamUrl(url: string): RequestedGameStoreIdentifier {
  const { type: gameType, id } = steamUrlPattern.exec(url)!.groups!;

  return {
    store: 'steam',
    slug: `${gameType}/${id}`,
  };
}

function getStoreIdentifierFromEpicUrl(
  url: string
): RequestedGameStoreIdentifier {
  const { slug, type: gameType } = epicUrlPattern.exec(url)!.groups!;

  return {
    store: 'epic',
    slug: `${gameType}/${slug}`,
  };
}

export function convertUrlToStoreIdentifier(
  url: string
): RequestedGameStoreIdentifier {
  if (steamUrlPattern.test(url)) {
    return getIndentifierFromSteamUrl(url);
  } else if (epicUrlPattern.test(url)) {
    return getStoreIdentifierFromEpicUrl(url);
  }

  throw new UnsupportedStoreUrlError(url);
}

export function revertStoreIdentifierToUrl({
  slug,
  store,
}: RequestedGameStoreIdentifier): string {
  if (store === 'steam') {
    return `https://store.steampowered.com/${slug}`;
  } else if (store === 'epic') {
    return `https://store.epicgames.com/${slug}`;
  }

  throw new Error(`Unsupported store: ${store}`);
}
