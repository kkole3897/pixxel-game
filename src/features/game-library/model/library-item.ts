import z from 'zod';

import { playStatusSchema } from './play-status';
import { gameDrmSchema } from '@/entities/game';

const libraryDrmSchema = z.object({
  isCustomDrm: z.literal(false),
  drm: gameDrmSchema,
});

const customLibraryDrmSchema = z.object({
  isCustomDrm: z.literal(true),
  drm: z.string(),
});

export const additionalLibraryItemSchema = z
  .discriminatedUnion('isCustomDrm', [libraryDrmSchema, customLibraryDrmSchema])
  .and(
    z.object({
      playStatus: playStatusSchema,
      playTime: z.number().default(0),
      isCleared: z.boolean().default(false),
      memo: z.string().nullable(),
    })
  );

export const libraryItemSchema = z.object({
  id: z.number(),
  title: z.string().nullable(),
  mainImage: z.string().url().nullable(),
  gameId: z.number().nullable(),
  additionalInfo: z.array(additionalLibraryItemSchema).default([]),
});

export type LibraryItem = z.infer<typeof libraryItemSchema>;
export type AdditionalLibraryItem = z.infer<typeof additionalLibraryItemSchema>;
