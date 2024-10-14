import z from 'zod';

import { RequestedGameStatus } from './requested-game-status';
import { GAME_STORE } from '@/entities/game';

const baseRequestedGameSchema = z.object({
  id: z.number(),
  title: z.string().nullable(),
  createdAt: z.string().datetime(),
  completedAt: z.string().datetime().nullable(),
  failedAt: z.string().datetime().nullable(),
});

const requestedSteamGameSchema = z.object({
  store: z.literal(GAME_STORE.Steam),
  slug: z.string().regex(/^(app|sub|bundle)\/(\d+)$/),
});

const requestedEpicGameSchema = z.object({
  store: z.literal(GAME_STORE.Epic),
  slug: z.string().regex(/^(p|bundles)\/(.+)$/),
});

export const requestedGameSchema = baseRequestedGameSchema.and(
  z.union([requestedSteamGameSchema, requestedEpicGameSchema])
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
