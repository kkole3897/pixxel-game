export {
  useGetBestPriceHistoryQuery as useGetBestGamePriceHistoryQuery,
  useGetPriceHistoryQuery as useGetGamePriceHistoryQuery,
} from './use-price-history-query';

export { type GameType } from './game-type';
export { type GameStore } from './game-store';
export { type GameDrm } from './game-drm';
export { type MetaCritic } from './meta-critic';
export { type OpenCritic, type OpenCriticTier } from './open-critic';
export { type SteamScore } from './steam-score';
export {
  getBestCatalog,
  getCurrentPrice,
  getHistoricalLowestPrice,
  isDiscountedCatalogItem,
  isDiscounted,
  calculateCatalogDiscountRatio,
  getCurrentBestPrice,
  type Game,
  type GamePreview,
  type GameCatalogItemPreview,
} from './game';
export { type GameCatalogItem } from './game-catalog';
export { type PriceHistoryRecord as GamePriceHistoryRecord } from './price-history';
