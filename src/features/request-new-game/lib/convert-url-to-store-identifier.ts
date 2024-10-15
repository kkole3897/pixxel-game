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

function checkSteamSlug(slug: string): boolean {
  const pattern = /^(?<type>(app|bundle|sub))\/(?<id>\d+)$/;

  return pattern.test(slug);
}

function checkEpicSlug(slug: string): boolean {
  const pattern = /^(?<type>(p|bundles))\/(?<slug>.+)$/;

  return pattern.test(slug);
}

export function revertStoreIdentifierToUrl({
  slug,
  store,
}: {
  store: string;
  slug: string;
}): string {
  if (store === 'steam') {
    if (!checkSteamSlug(slug)) {
      throw new Error(`Invalid slug for steam: ${slug}`);
    }

    return `https://store.steampowered.com/${slug}`;
  } else if (store === 'epic') {
    if (!checkEpicSlug(slug)) {
      throw new Error(`Invalid slug for epic: ${slug}`);
    }

    return `https://store.epicgames.com/${slug}`;
  }

  throw new Error(`Unsupported store: ${store}`);
}
