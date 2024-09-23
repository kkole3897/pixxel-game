import { RequestedGame } from './requested-game';

export type CreateRequestedGameData = Pick<
  RequestedGame,
  'slug' | 'store' | 'title'
>;

export function toUrl(data: CreateRequestedGameData): string {
  if (data.store === 'steam') {
    return `https://store.steampowered.com/${data.slug}`;
  } else if (data.store === 'epic') {
    return `https://store.epicgames.com/p/${data.slug}`;
  }

  throw new Error('Unsupported store');
}
