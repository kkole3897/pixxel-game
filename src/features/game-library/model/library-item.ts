import z from 'zod';

import { libraryWriteTypeSchema } from './library-write-type';
import { playStatusSchema } from './play-status';
import { gameDrmSchema } from '@/entities/game';

const baseLibraryItemSchema = z.object({
  id: z.number(),
  playTime: z.number().default(0),
  isCleared: z.boolean().default(false),
  playStatus: playStatusSchema.default('playing'),
  memo: z.string().nullable(),
});

export const autoLibraryItemSchema = baseLibraryItemSchema.extend({
  type: z.literal(libraryWriteTypeSchema.enum.Auto),
  gameId: z.number(),
  drms: z.array(gameDrmSchema),
});

export type AutoLibraryItem = z.infer<typeof autoLibraryItemSchema>;

export const manualLibraryItemSchema = baseLibraryItemSchema.extend({
  type: z.literal(libraryWriteTypeSchema.enum.Manual),
  title: z.string().nullable(),
  mainImage: z.string().url().nullable(),
  drms: z.array(z.string()),
  url: z.string().url().nullable(),
});

export type ManualLibraryItem = z.infer<typeof manualLibraryItemSchema>;

export const libraryItemSchema = z.discriminatedUnion('type', [
  autoLibraryItemSchema,
  manualLibraryItemSchema,
]);

export type LibraryItem = z.infer<typeof libraryItemSchema>;
