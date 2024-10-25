import z from 'zod';

import { playStatusSchema } from './play-status';
import { gameDrmSchema } from '@/entities/game';

export const libraryDrmSchema = z.object({
  isCustomDrm: z.literal(false),
  drm: gameDrmSchema,
});

export const customLibraryDrmSchema = z.object({
  isCustomDrm: z.literal(true),
  drm: z.string(),
});

export const baseAdditionalLibraryItemSchema = z.object({
  id: z.number(),
  playStatus: playStatusSchema.nullable(),
  playTime: z.number().default(0),
  isCleared: z.boolean().default(false),
  memo: z.string().nullable(),
  libraryId: z.number(),
});

export const additionalLibraryItemSchema = z
  .discriminatedUnion('isCustomDrm', [libraryDrmSchema, customLibraryDrmSchema])
  .and(baseAdditionalLibraryItemSchema);

const baseLibraryItemSchema = z.object({
  id: z.number(),
  additionalInfo: z.array(additionalLibraryItemSchema).default([]),
});

export const autoLibraryItemSchema = baseLibraryItemSchema.extend({
  gameId: z.number(),
});

export const manualLibraryItemSchema = baseLibraryItemSchema.extend({
  title: z.string(),
  mainImage: z.string().url().nullable(),
});

export const libraryItemSchema = z.union([
  autoLibraryItemSchema,
  manualLibraryItemSchema,
]);

export type LibraryItem = z.infer<typeof libraryItemSchema>;
export type AdditionalLibraryItem = z.infer<typeof additionalLibraryItemSchema>;
