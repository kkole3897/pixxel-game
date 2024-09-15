import z from 'zod';

import { gameStoreSchema } from '@/entities/game';

export const requestNewGameFormDataSchema = z.object({
  store: gameStoreSchema,
  url: z.string().url(),
});

export type RequestNewGameFormData = z.infer<
  typeof requestNewGameFormDataSchema
>;
