import { createQueryKeys } from '@lukemorales/query-key-factory';

import { GameStore } from '@/entities/game';

export const requestNewGameQueryKeys = createQueryKeys('requestNewGame', {
  getExistedGame: (payload: { store: GameStore; slug: string } | null) => [
    { payload },
  ],
  getExistedRequest: (payload: { store: GameStore; slug: string } | null) => [
    { payload },
  ],
  checkExistedGame: null,
  checkExistedRequest: null,
  createRequestedGame: null,
});
