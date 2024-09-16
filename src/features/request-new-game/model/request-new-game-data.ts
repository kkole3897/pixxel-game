import { GameStore } from '@/entities/game';

export type RequestNewGameData = {
  store: GameStore;
  slug: string;
};

export function toUrl(data: RequestNewGameData): string {
  if (data.store === 'steam') {
    return `https://store.steampowered.com/${data.slug}`;
  } else if (data.store === 'epic') {
    return `https://store.epicgames.com/p/${data.slug}`;
  }

  throw new Error('Unsupported store');
}
