import z from 'zod';

import { requestedGameStoreIdentifierSchema } from './requested-game-store-identifier';

export const createRequestedGameDataSchema = z.intersection(
  requestedGameStoreIdentifierSchema,
  z.object({
    title: z.string().nullable().optional(),
  })
);

export type CreateRequestedGameData = z.infer<
  typeof createRequestedGameDataSchema
>;

export function toUrl(data: CreateRequestedGameData): string {
  if (data.store === 'steam') {
    return `https://store.steampowered.com/${data.slug}`;
  } else if (data.store === 'epic') {
    return `https://store.epicgames.com/p/${data.slug}`;
  }

  throw new Error('Unsupported store');
}
