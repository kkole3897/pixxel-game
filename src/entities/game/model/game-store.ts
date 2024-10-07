import z from 'zod';

import { GAME_STORE } from '../constants/game-store';

export const gameStoreSchema = z.nativeEnum(GAME_STORE);

export type GameStore = z.infer<typeof gameStoreSchema>;
