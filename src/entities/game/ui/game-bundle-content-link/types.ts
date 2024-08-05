import { type Game, type GameCatalogItem } from '../../model';

export type BundleContent = Pick<
  Game,
  'title' | 'titleKo' | 'mainImage' | 'publicId' | 'isFree'
> & {
  gameCatalog: Pick<
    GameCatalogItem,
    'currentPrice' | 'regularPrice' | 'currentPriceExpireAt'
  >[];
};
