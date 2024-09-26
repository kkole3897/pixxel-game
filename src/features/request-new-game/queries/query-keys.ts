import { createQueryKeys } from '@lukemorales/query-key-factory';

import { GameStore } from '@/entities/game';

export const requestNewGameQueryKeys = createQueryKeys('requestNewGame', {
  checkExistedGame: (payload: { store: GameStore; slug: string } | null) => [
    { payload },
  ],
  checkExistedRequest: (payload: { store: GameStore; slug: string } | null) => [
    { payload },
  ],
  createRequestedGame: null,
});
