import z from 'zod';

import { gameStoreSchema } from '@/entities/game';

export const formDataSchema = z.object({
  store: gameStoreSchema,
  url: z.string().url(),
});

export type FormData = z.infer<typeof formDataSchema>;
