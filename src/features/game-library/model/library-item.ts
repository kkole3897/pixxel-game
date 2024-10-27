import z from 'zod';

import { playStatusSchema } from './play-status';
import { gameDrmSchema } from '@/entities/game';

export const libraryDrmSchema = z.object({
  isCustomDrm: z.literal(false),
  drm: gameDrmSchema,
});

export const customLibraryDrmSchema = z.object({
  isCustomDrm: z.literal(true),
  drm: z.string().min(1),
});

export const basePlayRecordSchema = z.object({
  id: z.number(),
  playStatus: playStatusSchema.nullable(),
  playTime: z.number().min(0).default(0),
  isCleared: z.boolean().default(false),
  memo: z
    .string()
    .nullable()
    .transform((value) => {
      if (typeof value === 'string' && value.trim() === '') {
        return null;
      }

      return value;
    }),
  libraryId: z.number(),
});

export const playRecordSchema = z
  .discriminatedUnion('isCustomDrm', [libraryDrmSchema, customLibraryDrmSchema])
  .and(basePlayRecordSchema);

const baseLibraryItemSchema = z.object({
  id: z.number(),
  playRecords: z.array(playRecordSchema).default([]),
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
export type PlayRecord = z.infer<typeof playRecordSchema>;
export type LibraryDrm = z.infer<typeof libraryDrmSchema>;
export type CustomLibraryDrm = z.infer<typeof customLibraryDrmSchema>;
