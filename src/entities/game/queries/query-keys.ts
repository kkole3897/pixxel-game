import { createQueryKeys } from '@lukemorales/query-key-factory';

export const gameQueryKeys = createQueryKeys('game', {
  detail: (publicId: string) => [publicId],
  lowestPriceRanks: (publicId: string) => [publicId],
  bundleContents: (id: number) => [id],
  dlcs: (id: number) => [id],
  list: null,
  search: (query: string) => [query],
  priceHistory: (gamePublicId: string) => [gamePublicId],
  bestPriceHistory: (gamePublicId: string) => [gamePublicId],
});
