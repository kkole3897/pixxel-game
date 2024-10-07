import { RelatedGameContent } from './types';
import {
  getBestCatalogItem,
  getEffectivePrice,
  isSalesEnded,
  getGameTitle,
} from '../../model';

function getCurrentBestPriceText(currentBestPrice: number | null) {
  if (currentBestPrice === null) {
    return '';
  }

  if (currentBestPrice === 0) {
    return '무료';
  }

  return `${currentBestPrice.toLocaleString()}원`;
}

export function useRelatedGameContentLink(content: RelatedGameContent) {
  const title = getGameTitle(content);
  const href = `/game/${content.publicId}`;
  const currentBestCatalog = getBestCatalogItem(content.gameCatalog);
  const currentBestPrice =
    currentBestCatalog === null ? null : getEffectivePrice(currentBestCatalog);
  const currentBestPriceText = getCurrentBestPriceText(currentBestPrice);
  const isAllSalesEnded = content.gameCatalog.every((catalog) =>
    isSalesEnded(catalog.salesEndedAt)
  );

  return {
    title,
    href,
    currentBestPriceText,
    isAllSalesEnded,
  };
}
