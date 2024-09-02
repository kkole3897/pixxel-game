import {
  getBestCatalogItem,
  isSalesEnded,
  getEffectivePrice,
  getHistoricalLowestPrice,
  type GamePreview,
} from '../model';

function isDiscounted(
  currentPrice: number | null,
  regularPrice: number | null
) {
  return (
    currentPrice !== null &&
    regularPrice !== null &&
    currentPrice < regularPrice &&
    regularPrice !== 0
  );
}

function getDiscountPercent(
  currentPrice: number | null,
  regularPrice: number | null
) {
  if (!isDiscounted(currentPrice, regularPrice)) {
    return 0;
  }

  return Math.floor(
    ((<number>regularPrice - <number>currentPrice) / <number>regularPrice) * 100
  );
}

export function useGamePreview(gamePreview: GamePreview) {
  const currentBestCatalog = getBestCatalogItem(gamePreview.gameCatalog);

  const isBestSalesEnded =
    currentBestCatalog === null
      ? false
      : isSalesEnded(currentBestCatalog.salesEndedAt);

  const gameTitle =
    gamePreview.titleKo ?? gamePreview.title ?? gamePreview.publicId;

  const currentPrice =
    currentBestCatalog === null || isBestSalesEnded
      ? null
      : getEffectivePrice(currentBestCatalog);
  const regularPrice =
    currentBestCatalog === null ? null : currentBestCatalog.regularPrice;
  const historicalLowestPrice = getHistoricalLowestPrice(
    gamePreview.gameCatalog
  );

  const currentPriceText =
    currentPrice === null
      ? ''
      : currentPrice === 0
        ? 'Free'
        : `${currentPrice?.toLocaleString()}원`;
  const regularPriceText =
    regularPrice === null ? '' : `${regularPrice?.toLocaleString()}원`;
  const discountPercentText = `${getDiscountPercent(currentPrice, regularPrice)}%`;
  const isHistoricalLow =
    isDiscounted(currentPrice, regularPrice) &&
    historicalLowestPrice !== null &&
    currentPrice === historicalLowestPrice;

  return {
    gameTitle,
    currentBestCatalog,
    currentPriceText,
    regularPriceText,
    discountPercentText,
    isDiscounted: isDiscounted(currentPrice, regularPrice),
    isHistoricalLow,
    isBestSalesEnded,
  };
}
