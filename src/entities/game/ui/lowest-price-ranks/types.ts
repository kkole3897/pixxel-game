import {
  type GamePriceHistoryRecord,
  type GameCatalogItem,
} from '../../model/';

export type Record = Pick<
  GamePriceHistoryRecord,
  'currentPrice' | 'startAt'
> & {
  store: GameCatalogItem['store'];
};
