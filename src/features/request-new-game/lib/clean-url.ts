import { InvalidUrlError } from '../model';
import { type GameStore } from '@/entities/game';

const steamUrlPattern =
  /https:\/\/store.steampowered.com\/(?<type>(app|bundle|sub))\/(?<id>\d+)(\/.*)?/;

const epicUrlPattern =
  /https:\/\/store.epicgames.com(\/(ko|en-US|ar|de|es-ES|es-MX|fr|it|ja|pl|pt-BR|ru|th|tr|zh-CN|zh-Hant))?\/p\/(?<slug>.+)(\/.*)?/;

export function checkSteamUrl(url: string): boolean {
  return steamUrlPattern.test(url);
}

export function checkEpicUrl(url: string): boolean {
  return epicUrlPattern.test(url);
}

function cleanSteamUrl(url: string): string {
  if (!checkSteamUrl(url)) {
    throw new InvalidUrlError(url, 'steam');
  }

  const { type: gameType, id } = steamUrlPattern.exec(url)!.groups!;

  const cleanedUrl = `https://store.steampowered.com/${gameType}/${id}`;

  return cleanedUrl;
}

function cleanEpicUrl(url: string): string {
  if (!checkEpicUrl(url)) {
    throw new InvalidUrlError(url, 'epic');
  }

  const { slug } = epicUrlPattern.exec(url)!.groups!;

  const cleanedUrl = `https://store.epicgames.com/p/${slug}`;

  return cleanedUrl;
}

export function cleanUrl(url: string, store: GameStore): string {
  if (store === 'steam') {
    return cleanSteamUrl(url);
  } else if (store === 'epic') {
    return cleanEpicUrl(url);
  }

  // this condition is never reached
  throw new Error(`Unsupported store: ${store}`);
}
