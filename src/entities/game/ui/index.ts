export { GameBox } from './game-box';
export { MetaScore, UserScore as MetaUserScore } from './meta-critic';
export {
  Rating as OpenCriticRating,
  TopCritic as OpenCriticTop,
  RecommendPercent as OpenCriticRecommend,
} from './open-ciritic';
export { Bar as SteamScoreBar } from './steam-score';
export { StoreLink as GameStoreLink } from './store-link';
export { PriceHistoryChart as GamePriceHistoryChart } from './price-history-chart';
export { GamePreviewCard } from './game-preview-card';
export { LowestPriceRankItem, LowestPriceRankRoot } from './lowest-price-ranks';

import { LowestPriceRankItem, LowestPriceRankRoot } from './lowest-price-ranks';

export const LowestPriceRanks = {
  Root: LowestPriceRankRoot,
  Item: LowestPriceRankItem,
};
