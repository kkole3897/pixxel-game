import { RequestNewGameStatus } from './request-new-game-status';
import { GameStore } from '@/entities/game';

export type RequestNewGameLog = {
  id: number;
  slug: string;
  store: GameStore;
  completedAt: string | null; // utc 0 datetime format
  createdAt: string; // utc 0 datetime format
  title: string;
};

export function getRequestNewGameStatus(
  log: Pick<RequestNewGameLog, 'completedAt'>
): RequestNewGameStatus {
  return log.completedAt ? 'completed' : 'processing';
}
