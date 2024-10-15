import z from 'zod';

import { GAME_STORE } from '@/entities/game';

const steamIndentifierSchema = z.object({
  store: z.literal(GAME_STORE.Steam),
  slug: z.string().regex(/^(app|sub|bundle)\/(\d+)$/),
});

const epicIdentifierSchema = z.object({
  store: z.literal(GAME_STORE.Epic),
  slug: z.string().regex(/^(p|bundles)\/(.+)$/),
});

export const requestedGameStoreIdentifierSchema = z.union([
  steamIndentifierSchema,
  epicIdentifierSchema,
]);

export type RequestedGameStoreIdentifier = z.infer<
  typeof requestedGameStoreIdentifierSchema
>;
