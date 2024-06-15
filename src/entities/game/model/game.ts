import dayjs from 'dayjs';

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

type GameCatalogItemPreview = Pick<
  GameCatalogItem,
  | 'id'
  | 'gameId'
  | 'store'
  | 'drm'
  | 'currentPrice'
  | 'currentPriceExpireAt'
  | 'lowestPrice'
  | 'regularPrice'
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

export function getCurrentPrice(
  gameCatalogItem: GameCatalogItemPreview
): number | null {
  if (gameCatalogItem.currentPrice === null) {
    return gameCatalogItem.regularPrice;
  }

  return isCurrentPriceExpired(gameCatalogItem.currentPriceExpireAt)
    ? gameCatalogItem.regularPrice
    : gameCatalogItem.currentPrice;
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
