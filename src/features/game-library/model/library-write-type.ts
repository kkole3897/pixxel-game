import z from 'zod';

import { LIBRARY_WRITE_TYPE } from '../constants';

export const libraryWriteTypeSchema = z.nativeEnum(LIBRARY_WRITE_TYPE);
export type LibraryWriteType = z.infer<typeof libraryWriteTypeSchema>;
