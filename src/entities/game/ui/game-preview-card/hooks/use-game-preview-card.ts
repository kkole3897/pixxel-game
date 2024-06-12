import {
  type GamePreview,
  getCurrentPrice,
  getHistoricalLowestPrice,
} from '../../../model';
import { useGamePreview } from '../../../lib';

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

export function useGamePreviewCard(gamePreview: GamePreview) {
  const { currentBestCatalog } = useGamePreview(gamePreview);
  const gameTitle =
    gamePreview.titleKo ?? gamePreview.title ?? gamePreview.publicId;

  const currentPrice =
    currentBestCatalog === null ? null : getCurrentPrice(currentBestCatalog);
  const regularPrice =
    currentBestCatalog === null ? null : currentBestCatalog.regularPrice;
  const historicalLowestPrice = getHistoricalLowestPrice(gamePreview);

  const currentPriceText =
    currentPrice === 0 ? 'Free' : `${currentPrice?.toLocaleString()}원`;
  const regularPriceText = `${regularPrice?.toLocaleString()}원`;
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
  };
}
