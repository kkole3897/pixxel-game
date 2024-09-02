import { GameStore } from './game-store';
import { GameDrm } from './game-drm';
import dayjs from '@/shared/lib/dayjs';

export interface GameCatalogItem {
  id: number;
  gameId: number | null;
  url: string;
  store: GameStore;
  drm: GameDrm;
  regularPrice: number | null;
  currentPrice: number | null;
  currentPriceExpireAt: string | null;
  lowestPrice: number | null;
  lowestPriceUpdatedAt: string | null;
  salesEndedAt: string | null;
}

export type GameCatalogPreviewItem = Pick<
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

export function isCurrentPriceExpired(
  currentPriceExpireAt: string | null
): boolean {
  if (currentPriceExpireAt === null) {
    return false;
  }

  const current = dayjs();

  return current > dayjs(currentPriceExpireAt);
}

export function isSalesEnded(salesEndedAt: string | null): boolean {
  if (salesEndedAt === null) {
    return false;
  }

  const current = dayjs();

  return current > dayjs(salesEndedAt);
}

export function getEffectivePrice<
  T extends Pick<
    GameCatalogPreviewItem,
    'currentPrice' | 'salesEndedAt' | 'regularPrice' | 'currentPriceExpireAt'
  >,
>(catalogItem: T): number | null {
  if (isSalesEnded(catalogItem.salesEndedAt)) {
    return null;
  }

  if (catalogItem.currentPrice === null) {
    return catalogItem.regularPrice;
  }

  return isCurrentPriceExpired(catalogItem.currentPriceExpireAt)
    ? catalogItem.regularPrice
    : catalogItem.currentPrice;
}

export function getBestCatalogItem<
  T extends Pick<
    GameCatalogPreviewItem,
    'currentPrice' | 'regularPrice' | 'currentPriceExpireAt' | 'salesEndedAt'
  >,
>(catalog: T[]): T | null {
  if (catalog.length === 0) {
    return null;
  }

  const bestCatalog = catalog.reduce<null | T>((best, cur) => {
    if (!best) {
      return cur;
    }

    const bestEffectivePrice = getEffectivePrice(best);
    const curEffectivePrice = getEffectivePrice(cur);

    if (bestEffectivePrice === null) {
      return cur;
    }

    if (curEffectivePrice === null) {
      return best;
    }

    if (curEffectivePrice < bestEffectivePrice) {
      return cur;
    }

    return best;
  }, null);

  return bestCatalog;
}

export function getHistoricalLowestPrice<T extends GameCatalogPreviewItem>(
  catalog: T[]
): number | null {
  if (catalog.length === 0) {
    return null;
  }

  const historicalLowestPrice = catalog.reduce<null | number>((lowest, cur) => {
    if (lowest === null) {
      return cur.lowestPrice;
    }

    if (cur.lowestPrice === null) {
      return lowest;
    }

    return cur.lowestPrice < lowest ? cur.lowestPrice : lowest;
  }, null);

  return historicalLowestPrice;
}

export function isDiscounted<
  T extends Pick<
    GameCatalogPreviewItem,
    'currentPrice' | 'currentPriceExpireAt' | 'regularPrice' | 'salesEndedAt'
  >,
>(catalogItem: T): boolean {
  const effectivePrice = getEffectivePrice(catalogItem);
  const { regularPrice } = catalogItem;

  if (effectivePrice === null || regularPrice === null || regularPrice === 0) {
    return false;
  }

  return effectivePrice < regularPrice;
}

export function getCatalogDiscountRate<
  T extends Pick<
    GameCatalogPreviewItem,
    'currentPrice' | 'regularPrice' | 'currentPriceExpireAt' | 'salesEndedAt'
  >,
>(catalogItem: T) {
  if (!isDiscounted(catalogItem)) {
    return 0;
  }

  const effectivePrice = getEffectivePrice(catalogItem);
  const { regularPrice } = catalogItem;

  return (regularPrice! - effectivePrice!) / regularPrice!;
}
