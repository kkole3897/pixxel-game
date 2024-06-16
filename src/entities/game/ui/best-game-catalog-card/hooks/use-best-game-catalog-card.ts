import dayjs from 'dayjs';

import type { BestGameCatalog } from '../types';
import {
  getCurrentPrice,
  isDiscountedCatalogItem,
  isDiscounted,
} from '@/entities/game';

function formatReleaseDate({
  releaseYear,
  releaseMonth,
  releaseDay,
}: Pick<BestGameCatalog, 'releaseYear' | 'releaseMonth' | 'releaseDay'>) {
  let releaseDate: string;

  if (releaseYear === null) {
    return '미정';
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

  const expireDateText = dayjs(currentPriceExpireAt).format('M월 D일');

  return `에서 ${expireDateText}까지 할인 중`;
}

function getDiscountPrecent({
  regularPrice,
  currentPrice,
}: {
  regularPrice: number | null;
  currentPrice: number | null;
}) {
  if (!isDiscounted({ regularPrice, currentPrice })) {
    return 0;
  }

  return `${Math.floor(((<number>regularPrice - <number>currentPrice) / <number>regularPrice) * 100)}%`;
}

function formatPrice(price: number | null) {
  if (price === null) {
    return '';
  }

  return `${price.toLocaleString()}원`;
}

export function useBestGameCatalogCard(game: BestGameCatalog) {
  const title = game.titleKo ?? game.title ?? game.publicId;
  const releaseDate = formatReleaseDate(game);
  const currentPrice =
    game.gameCatalog === null ? null : getCurrentPrice(game.gameCatalog);
  const isDiscounted =
    game.gameCatalog === null
      ? false
      : isDiscountedCatalogItem(game.gameCatalog);
  const onSalesText = isDiscounted
    ? getOnDiscountText(game.gameCatalog?.currentPriceExpireAt)
    : '에서 판매 중';
  const discountPercent =
    game.gameCatalog === null
      ? 0
      : getDiscountPrecent({
          regularPrice: game.gameCatalog.regularPrice,
          currentPrice,
        });
  const currentPriceText = formatPrice(currentPrice);
  const regularPriceText =
    game.gameCatalog === null ? '' : formatPrice(game.gameCatalog.regularPrice);
  const hasPriceInfo = game.gameCatalog !== null && currentPrice !== null;

  return {
    title,
    releaseDate,
    onSalesText,
    discountPercent,
    isDiscounted,
    currentPriceText,
    regularPriceText,
    hasPriceInfo,
  };
}
