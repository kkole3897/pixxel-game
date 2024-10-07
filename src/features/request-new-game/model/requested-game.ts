import { RequestedGameStatus } from './requested-game-status';
import { GameStore } from '@/entities/game';

export type RequestedGame = {
  id: number;
  slug: string;
  store: GameStore;
  completedAt: string | null; // utc 0 datetime format
  createdAt: string; // utc 0 datetime format
  title: string | null;
  failedAt: string | null; // utc 0 datetime format
};

export function getRequestedGameStatus(
  requestedGame: Pick<RequestedGame, 'completedAt' | 'failedAt'>
): RequestedGameStatus {
  if (requestedGame.completedAt && requestedGame.failedAt) {
    return requestedGame.completedAt > requestedGame.failedAt
      ? 'completed'
      : 'failed';
  } else if (requestedGame.completedAt) {
    return 'completed';
  } else if (requestedGame.failedAt) {
    return 'failed';
  }

  return 'processing';
}
