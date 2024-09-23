import { RequestedGameStatus } from './requested-game-status';
import { GameStore } from '@/entities/game';

export type RequestedGame = {
  id: number;
  slug: string;
  store: GameStore;
  completedAt: string | null; // utc 0 datetime format
  createdAt: string; // utc 0 datetime format
  title: string;
};

export function getRequestedGameStatus(
  log: Pick<RequestedGame, 'completedAt'>
): RequestedGameStatus {
  return log.completedAt ? 'completed' : 'processing';
}
