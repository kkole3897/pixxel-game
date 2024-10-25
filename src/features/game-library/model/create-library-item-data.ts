import z from 'zod';

import {
  libraryDrmSchema,
  customLibraryDrmSchema,
  baseAdditionalLibraryItemSchema,
} from './library-item';

export const createAdditionalLibraryItemDataSchema = z
  .discriminatedUnion('isCustomDrm', [libraryDrmSchema, customLibraryDrmSchema])
  .and(
    baseAdditionalLibraryItemSchema.omit({
      id: true,
      libraryId: true,
    })
  );

const createBaseLibraryItemDataSchema = z.object({
  additionalInfo: z.array(createAdditionalLibraryItemDataSchema).default([]),
});

export const createAutoLibraryItemDataSchema =
  createBaseLibraryItemDataSchema.extend({
    gameId: z.number(),
  });

export const createManualLibraryItemDataSchema =
  createBaseLibraryItemDataSchema.extend({
    title: z.string(),
    mainImage: z.string().url().nullable(),
  });

export const createLibraryItemDataSchema = z.union([
  createAutoLibraryItemDataSchema,
  createManualLibraryItemDataSchema,
]);

export type CreateLibraryItemData = z.infer<typeof createLibraryItemDataSchema>;
export type CreateAutoLibraryItemData = z.infer<
  typeof createAutoLibraryItemDataSchema
>;
export type CreateManualLibraryItemData = z.infer<
  typeof createManualLibraryItemDataSchema
>;
export type CreateAdditionalLibraryItemData = z.infer<
  typeof createAdditionalLibraryItemDataSchema
>;
