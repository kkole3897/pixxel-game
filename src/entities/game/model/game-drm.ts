import z from 'zod';

import { GAME_DRM } from '../constants';

export const gameDrmSchema = z.nativeEnum(GAME_DRM);
export type GameDrm = z.infer<typeof gameDrmSchema>;
