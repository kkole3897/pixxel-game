import { GAME_TYPE } from '../constants';

export type GameType = (typeof GAME_TYPE)[keyof typeof GAME_TYPE];
