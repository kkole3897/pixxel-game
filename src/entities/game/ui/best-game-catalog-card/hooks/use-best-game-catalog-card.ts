import dayjs from '@/shared/lib/dayjs';

import type { BestGameCatalog } from '../types';
import {
  getEffectivePrice,
  isDiscounted as isDiscountedCatalogItem,
  isSalesEnded,
  getCatalogDiscountRate,
  getGameTitle,
} from '../../../model';

function formatReleaseDate({
  releaseYear,
  releaseMonth,
  releaseDay,
}: Pick<BestGameCatalog, 'releaseYear' | 'releaseMonth' | 'releaseDay'>) {
  let releaseDate: string;

  if (releaseYear === null) {
    return '-';
  }

  releaseDate = `${releaseYear}년`;

  if (releaseMonth === null) {
    return releaseDate;
  }

  releaseDate = `${releaseDate} ${releaseMonth}월`;

  if (releaseDay === null) {
    return releaseDate;
  }

  releaseDate = `${releaseDate} ${releaseDay}일`;

  return releaseDate;
}

function getOnDiscountText(currentPriceExpireAt: string | null | undefined) {
  if (currentPriceExpireAt == null) {
    return '에서 할인 중';
  }

  const expireDateText = dayjs(currentPriceExpireAt).tz().format('M월 D일');

  return `에서 ${expireDateText}까지 할인 중`;
}

function formatDiscountPercent(discountRate: number) {
  return `${Math.floor(discountRate * 100)}%`;
}

function formatPrice(price: number | null) {
  if (price === null) {
    return '';
  }

  return `${price.toLocaleString()}원`;
}

export function useBestGameCatalogCard(game: BestGameCatalog) {
  const title = getGameTitle(game);
  const releaseDate = formatReleaseDate(game);
  const isBestSalesEnded =
    game.gameCatalog === null
      ? false
      : isSalesEnded(game.gameCatalog.salesEndedAt);
  const currentPrice =
    game.gameCatalog === null ? null : getEffectivePrice(game.gameCatalog);
  const isDiscounted =
    game.gameCatalog === null
      ? false
      : isDiscountedCatalogItem(game.gameCatalog);
  const onSalesText = isBestSalesEnded
    ? ''
    : isDiscounted
      ? getOnDiscountText(game.gameCatalog?.currentPriceExpireAt)
      : '에서 판매 중';
  const discountPercent =
    game.gameCatalog === null
      ? formatDiscountPercent(0)
      : formatDiscountPercent(getCatalogDiscountRate(game.gameCatalog));
  const currentPriceText = formatPrice(currentPrice);
  const regularPriceText =
    game.gameCatalog === null ? '' : formatPrice(game.gameCatalog.regularPrice);
  const hasPriceInfo = game.gameCatalog !== null && currentPrice !== null;

  const baseGameLink = game.baseGame ? `/game/${game.baseGame.publicId}` : null;
  const baseGameTitle = game.baseGame
    ? game.baseGame.titleKo ?? game.baseGame.title ?? game.baseGame.publicId
    : null;

  return {
    title,
    releaseDate,
    onSalesText,
    discountPercent,
    isDiscounted,
    currentPriceText,
    regularPriceText,
    hasPriceInfo,
    baseGameLink,
    baseGameTitle,
    isBestSalesEnded,
  };
}
