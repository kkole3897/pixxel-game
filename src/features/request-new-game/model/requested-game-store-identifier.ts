import { RequestedGame } from './requested-game';

export type RequestedGameStoreIdentifier = Pick<
  RequestedGame,
  'slug' | 'store'
>;
