import dayjs from '@/shared/lib/dayjs';

import {
  getEffectivePrice,
  isDiscounted as isDiscountedCatalogItem,
  getCatalogDiscountRate,
  isSalesEnded,
} from '../../../model';

import type { GameCatalogListItem } from '../types';

export function useGameCatalogItem(item: GameCatalogListItem) {
  const isDiscounted = isDiscountedCatalogItem(item);
  const currentPrice = getEffectivePrice(item);
  const currentPriceText =
    currentPrice === null ? '' : `${currentPrice.toLocaleString()}원`;
  const regularPriceText =
    item.regularPrice === null ? '' : `${item.regularPrice.toLocaleString()}원`;
  const hasPriceInfo = currentPrice !== null;
  const discountPercent = `${Math.floor(getCatalogDiscountRate(item) * 100)}%`;
  const willDiscountExpire =
    item.currentPriceExpireAt !== null &&
    dayjs(item.currentPriceExpireAt).isAfter(dayjs());
  const discountExpireDate = willDiscountExpire
    ? dayjs(item.currentPriceExpireAt).tz().format('YY.MM.DD')
    : '';

  return {
    isDiscounted,
    currentPriceText,
    regularPriceText,
    hasPriceInfo,
    discountPercent,
    willDiscountExpire,
    discountExpireDate,
    isSalesEnded: isSalesEnded(item.salesEndedAt),
  };
}
