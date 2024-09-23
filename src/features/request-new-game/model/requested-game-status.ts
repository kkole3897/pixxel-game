import { REQUESTED_GAME_STATUS } from '../constants';

export type RequestedGameStatus =
  (typeof REQUESTED_GAME_STATUS)[keyof typeof REQUESTED_GAME_STATUS];
