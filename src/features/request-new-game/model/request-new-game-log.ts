import { RequestNewGameStatus } from './request-new-game-status';
import { GameStore } from '@/entities/game';

export type RequestNewGameLog = {
  id: number;
  slug: string;
  store: GameStore;
  completedAt: string | null; // utc 0 datetime format
  createdAt: string; // utc 0 datetime format
  title: string;
  mainImage: string | null;
};

export function getRequestNewGameStatus(
  log: Pick<RequestNewGameLog, 'completedAt'>
): RequestNewGameStatus {
  return log.completedAt ? 'completed' : 'processing';
}

export function toOriginalUrl(log: Pick<RequestNewGameLog, 'store' | 'slug'>) {
  if (log.store === 'steam') {
    return `https://store.steampowered.com/${log.slug}`;
  } else if (log.store === 'epic') {
    return `https://store.epicgames.com/p/${log.slug}`;
  }

  throw new Error(`Unsupported store: ${log.store}`);
}
