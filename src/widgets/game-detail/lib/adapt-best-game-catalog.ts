import { BestGameCatalogCardProps, getCurrentPrice } from '@/entities/game';
import { type GetGameResponse } from '@/shared/api/core/games';

export function adaptBestCatalog(
  catalogItem: GetGameResponse['game']['gameCatalog'][number]
) {
  const {
    id,
    gameId,
    url,
    store,
    drm,
    regularPrice,
    currentPrice,
    currentPriceExpireAt,
  } = catalogItem;

  const bestCatalog: BestGameCatalogCardProps['game']['gameCatalog'] = {
    id,
    gameId,
    url,
    store,
    drm,
    regularPrice,
    currentPrice,
    currentPriceExpireAt,
  };

  return bestCatalog;
}

export function adaptBestGameCatalog(game: GetGameResponse['game']) {
  const {
    id,
    publicId,
    type,
    title,
    titleKo,
    mainImage,
    releaseYear,
    releaseMonth,
    releaseDay,
    gameCatalog,
    baseGame,
  } = game;

  let bestGameCatalog: BestGameCatalogCardProps['game'] = {
    id,
    publicId,
    type,
    title,
    titleKo,
    mainImage,
    releaseYear,
    releaseMonth,
    releaseDay,
    baseGame,
    gameCatalog: null,
  };

  if (gameCatalog.length === 0) {
    return bestGameCatalog;
  }

  const bestCatalogResponse = gameCatalog.reduce((best, cur) => {
    if (best === null) {
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
  });

  const bestCatalog = adaptBestCatalog(bestCatalogResponse);
  bestGameCatalog.gameCatalog = bestCatalog;

  return bestGameCatalog;
}
