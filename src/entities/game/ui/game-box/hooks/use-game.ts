import type { GamePreview, GameCatalogItemPreview } from '../../../model';

export function useGamePreview(game: GamePreview) {
  const initialCatalog: null | GameCatalogItemPreview = null;
  const lowestCurrentPriceCatalog = game.gameCatalog.reduce(
    (acc: null | GameCatalogItemPreview, cur: GameCatalogItemPreview) => {
      if (acc === null) {
        return cur;
      }

      if (acc.currentPrice === null && cur.currentPrice !== null) {
        return cur;
      }

      if (
        acc.currentPrice !== null &&
        cur.currentPrice !== null &&
        cur.currentPrice < acc.currentPrice
      ) {
        return cur;
      }

      return acc;
    },
    initialCatalog
  );
  const historicalLowestPrice = game.gameCatalog.reduce((acc, cur) => {
    if (cur.lowestPrice !== null && cur.lowestPrice < acc) {
      return cur.lowestPrice;
    }

    return acc;
  }, Infinity);

  const isPriceDefined = lowestCurrentPriceCatalog?.regularPrice != null;
  const regularPriceText =
    lowestCurrentPriceCatalog === null ||
    lowestCurrentPriceCatalog.regularPrice === null
      ? ''
      : lowestCurrentPriceCatalog.regularPrice.toLocaleString();
  const discountPriceText =
    lowestCurrentPriceCatalog === null ||
    lowestCurrentPriceCatalog.currentPrice === null
      ? ''
      : lowestCurrentPriceCatalog.currentPrice.toLocaleString();
  const discountRate =
    lowestCurrentPriceCatalog === null ||
    lowestCurrentPriceCatalog.regularPrice === null ||
    lowestCurrentPriceCatalog.regularPrice === 0 ||
    lowestCurrentPriceCatalog.currentPrice === null
      ? 0
      : (lowestCurrentPriceCatalog.regularPrice -
          lowestCurrentPriceCatalog.currentPrice) /
        lowestCurrentPriceCatalog.regularPrice;
  const isHistoricalLowest =
    lowestCurrentPriceCatalog !== null &&
    historicalLowestPrice === lowestCurrentPriceCatalog.currentPrice;
  const isStoreLowest =
    lowestCurrentPriceCatalog !== null &&
    lowestCurrentPriceCatalog.currentPrice ===
      lowestCurrentPriceCatalog.lowestPrice;
  const discountPercentText = `${Math.round(discountRate * 100)}%`;

  return {
    regularPriceText,
    discountPriceText,
    discountRate,
    isHistoricalLowest,
    isStoreLowest,
    isPriceDefined,
    discountPercentText,
  };
}
