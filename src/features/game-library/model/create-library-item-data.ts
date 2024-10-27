import z from 'zod';

import {
  libraryDrmSchema,
  customLibraryDrmSchema,
  basePlayRecordSchema,
} from './library-item';

export const createPlayRecordDataSchema = z
  .discriminatedUnion('isCustomDrm', [libraryDrmSchema, customLibraryDrmSchema])
  .and(
    basePlayRecordSchema.omit({
      id: true,
      libraryId: true,
    })
  );

export const createBaseLibraryItemDataSchema = z.object({
  playRecords: z.array(createPlayRecordDataSchema).nonempty(),
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
export type CreatePlayRecordData = z.infer<typeof createPlayRecordDataSchema>;
export type CreateBaseLibraryItemData = z.infer<
  typeof createBaseLibraryItemDataSchema
>;
