import { createQueryKeys } from '@lukemorales/query-key-factory';

// TODO: game slice query 통합
export const gameQueryKeys = createQueryKeys('game', {
  detail: (publicId: string) => [publicId],
  lowestPriceRanks: (publicId: string) => [publicId],
});
