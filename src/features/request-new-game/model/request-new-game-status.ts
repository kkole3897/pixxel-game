import { REQUEST_NEW_GAME_STATUS } from '../constants';

export type RequestNewGameStatus =
  (typeof REQUEST_NEW_GAME_STATUS)[keyof typeof REQUEST_NEW_GAME_STATUS];
