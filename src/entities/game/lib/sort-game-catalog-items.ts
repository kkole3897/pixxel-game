import { type GameCatalogItem } from '../model';
import { sorted } from '@/shared/lib/array';

export function sortGameCatalogItemsByCurrentPrice(
  gameCatalogItems: GameCatalogItem[],
  { ascending = true }: { ascending?: boolean } = {}
): GameCatalogItem[] {
  const sortedGameCatalogItems = sorted(gameCatalogItems, (a, b) => {
    if (ascending) {
      return (a.currentPrice ?? Infinity) - (b.currentPrice ?? Infinity);
    }

    return (b.currentPrice ?? Infinity) - (a.currentPrice ?? Infinity);
  });

  return sortedGameCatalogItems;
}
