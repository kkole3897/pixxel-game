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
  if (requestedGame.failedAt) {
    return 'failed';
  }

  return requestedGame.completedAt ? 'completed' : 'processing';
}
