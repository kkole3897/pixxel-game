import { GAME_STORE } from '../constants/game-store';

export type GameStore = (typeof GAME_STORE)[keyof typeof GAME_STORE];
