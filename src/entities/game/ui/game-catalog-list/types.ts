import { GameCatalogItem } from '../../model';

export type GameCatalogListItem = Pick<
  GameCatalogItem,
  'store' | 'drm' | 'regularPrice' | 'currentPrice' | 'currentPriceExpireAt'
>;
