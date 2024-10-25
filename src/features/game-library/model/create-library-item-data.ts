import z from 'zod';

import {
  libraryItemSchema,
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

export const createLibraryItemDataSchema = libraryItemSchema
  .omit({
    id: true,
    additionalInfo: true,
  })
  .extend({
    additionalInfo: z.array(createAdditionalLibraryItemDataSchema),
  });

export type CreateAdditionalLibraryItemData = z.infer<
  typeof createAdditionalLibraryItemDataSchema
>;
