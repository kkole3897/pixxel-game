import z from 'zod';

import { manualLibraryItemSchema } from './library-item';

export const createManualLibraryItemDataSchema = manualLibraryItemSchema.pick({
  playTime: true,
  isCleared: true,
  playStatus: true,
  memo: true,
  type: true,
  title: true,
  mainImage: true,
  drms: true,
  url: true,
});

export type CreateManualLibraryItemData = z.infer<
  typeof createManualLibraryItemDataSchema
>;
