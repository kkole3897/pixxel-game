import { type Game, type GameCatalogItem } from '@/entities/game';

export type BestGameCatalog = Pick<
  Game,
  | 'id'
  | 'publicId'
  | 'type'
  | 'title'
  | 'titleKo'
  | 'mainImage'
  | 'releaseYear'
  | 'releaseMonth'
  | 'releaseDay'
> & {
  gameCatalog: Pick<
    GameCatalogItem,
    | 'id'
    | 'gameId'
    | 'url'
    | 'store'
    | 'drm'
    | 'regularPrice'
    | 'currentPrice'
    | 'currentPriceExpireAt'
  > | null;
};
