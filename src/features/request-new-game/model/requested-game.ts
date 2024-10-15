import z from 'zod';

import { requestedGameStoreIdentifierSchema } from './requested-game-store-identifier';
import { type RequestedGameStatus } from './requested-game-status';

const baseRequestedGameSchema = z.object({
  id: z.number(),
  title: z.string().nullable(),
  createdAt: z.string().datetime(),
  completedAt: z.string().datetime().nullable(),
  failedAt: z.string().datetime().nullable(),
});

export const requestedGameSchema = z.intersection(
  baseRequestedGameSchema,
  requestedGameStoreIdentifierSchema
);

export type RequestedGame = z.infer<typeof requestedGameSchema>;

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
