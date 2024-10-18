import z from 'zod';

import { PLAY_STATUS } from '../constants';

export const playStatusSchema = z.nativeEnum(PLAY_STATUS);
export type PlayStatus = z.infer<typeof playStatusSchema>;
