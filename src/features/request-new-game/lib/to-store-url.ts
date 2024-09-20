import { GameStore } from '@/entities/game';

export function toStoreUrl({
  slug,
  store,
}: {
  slug: string;
  store: GameStore;
}): string {
  if (store === 'steam') {
    return `https://store.steampowered.com/${slug}`;
  } else if (store === 'epic') {
    return `https://store.epicgames.com/p/${slug}`;
  }

  throw new Error(`Unsupported store: ${store}`);
}
