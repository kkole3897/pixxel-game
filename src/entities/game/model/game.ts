import dayjs from '@/shared/lib/dayjs';
import { GameType } from './game-type';
import { MetaCritic } from './meta-critic';
import { OpenCritic } from './open-critic';
import { SteamScore } from './steam-score';
import { GameCatalogItem } from './game-catalog';

export interface Game {
  id: number;
  publicId: string;
  title: string | null;
  titleKo: string | null;
  type: GameType;
  isFree: boolean;
  releaseYear: number | null;
  releaseMonth: number | null;
  releaseDay: number | null;
  mainImage: string | null;
  description: string | null;
  summary: string | null;
  baseGameId: number | null;
  tags: string[];
  screenshots: string[];
  developers: string[];
  publishers: string[];
  createdAt: string;
  metaCritic: MetaCritic | null;
  openCritic: OpenCritic | null;
  steamScore: SteamScore | null;
  gameCatalog: GameCatalogItem[];
}

export type GameCatalogItemPreview = Pick<
  GameCatalogItem,
  | 'id'
  | 'gameId'
  | 'store'
  | 'drm'
  | 'currentPrice'
  | 'currentPriceExpireAt'
  | 'lowestPrice'
  | 'regularPrice'
  | 'salesEndedAt'
>;

export interface GamePreview
  extends Pick<
    Game,
    'id' | 'publicId' | 'title' | 'titleKo' | 'type' | 'isFree' | 'mainImage'
  > {
  gameCatalog: GameCatalogItemPreview[];
}

export function isCurrentPriceExpired(currentPriceExpireAt: string | null) {
  if (currentPriceExpireAt === null) {
    return false;
  }

  const current = dayjs();

  return current > dayjs(currentPriceExpireAt);
}

export function isSalesEnded(salesEndedAt: string | null) {
  if (salesEndedAt === null) {
    return false;
  }

  const current = dayjs();

  return current > dayjs(salesEndedAt);
}

export function getCurrentPrice(
  gameCatalogItem: Pick<
    GameCatalogItem,
    'currentPrice' | 'regularPrice' | 'currentPriceExpireAt' | 'salesEndedAt'
  >
): number | null {
  if (isSalesEnded(gameCatalogItem.salesEndedAt)) {
    return null;
  }

  if (gameCatalogItem.currentPrice === null) {
    return gameCatalogItem.regularPrice;
  }

  return isCurrentPriceExpired(gameCatalogItem.currentPriceExpireAt)
    ? gameCatalogItem.regularPrice
    : gameCatalogItem.currentPrice;
}

export function getCurrentBestPrice(
  game: Pick<Game, 'isFree'> & {
    gameCatalog: Pick<
      GameCatalogItem,
      'currentPrice' | 'regularPrice' | 'currentPriceExpireAt' | 'salesEndedAt'
    >[];
  }
) {
  if (game.isFree) {
    return 0;
  }

  if (game.gameCatalog.length === 0) {
    return null;
  }

  const currentBestPrice = game.gameCatalog.reduce<null | number>(
    (prevPrice, currentCatalogItem) => {
      const currentPrice = getCurrentPrice(currentCatalogItem);

      if (currentPrice === null) {
        return prevPrice;
      }

      return prevPrice === null || currentPrice < prevPrice
        ? currentPrice
        : prevPrice;
    },
    null
  );

  return currentBestPrice;
}

export function getBestCatalog(game: GamePreview) {
  if (game.gameCatalog.length === 0) {
    return null;
  }

  const bestCatalog = game.gameCatalog.reduce<null | GameCatalogItemPreview>(
    (best, cur) => {
      if (!best) {
        return cur;
      }

      const bestPrice = getCurrentPrice(best);
      const currentPrice = getCurrentPrice(cur);

      if (bestPrice === null) {
        return cur;
      }

      if (currentPrice === null) {
        return best;
      }

      if (currentPrice < bestPrice) {
        return cur;
      }

      return best;
    },
    null
  );

  return bestCatalog;
}

export function getHistoricalLowestPrice(game: GamePreview) {
  if (game.gameCatalog.length === 0) {
    return null;
  }

  const lowestPrice = game.gameCatalog.reduce<null | number>((lowest, cur) => {
    if (lowest === null) {
      return cur.lowestPrice;
    }

    if (cur.lowestPrice === null) {
      return lowest;
    }

    return cur.lowestPrice < lowest ? cur.lowestPrice : lowest;
  }, null);

  return lowestPrice;
}

export function isDiscounted({
  currentPrice,
  regularPrice,
}: {
  currentPrice: number | null;
  regularPrice: number | null;
}) {
  if (currentPrice === null || regularPrice === null || regularPrice === 0) {
    return false;
  }

  return currentPrice < regularPrice;
}

export function isDiscountedCatalogItem(
  gameCatalogItem: Parameters<typeof getCurrentPrice>[0]
) {
  const currentPrice = getCurrentPrice(gameCatalogItem);
  const { regularPrice } = gameCatalogItem;

  return isDiscounted({ currentPrice, regularPrice });
}

export function calculateCatalogDiscountRatio(
  catalogItem: Pick<
    GameCatalogItem,
    'currentPrice' | 'regularPrice' | 'currentPriceExpireAt' | 'salesEndedAt'
  >
) {
  const currentPrice = getCurrentPrice(catalogItem);
  const { regularPrice } = catalogItem;

  if (currentPrice === null || regularPrice === null || regularPrice === 0) {
    return 0;
  }

  return (regularPrice - currentPrice) / regularPrice;
}
