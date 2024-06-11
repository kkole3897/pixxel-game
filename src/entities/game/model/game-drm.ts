import { GAME_DRM } from '../constants';

export type GameDrm = (typeof GAME_DRM)[keyof typeof GAME_DRM];
