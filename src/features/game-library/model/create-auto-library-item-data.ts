import { z } from 'zod';
import { autoLibraryItemSchema } from './library-item';

export const createAutoLibraryItemDataSchema = autoLibraryItemSchema.pick({
  playTime: true,
  isCleared: true,
  playStatus: true,
  memo: true,
  type: true,
  gameId: true,
  drms: true,
});

export type CreateAutoLibraryItemData = z.infer<
  typeof createAutoLibraryItemDataSchema
>;
