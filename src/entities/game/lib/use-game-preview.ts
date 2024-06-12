import { getBestCatalog, type GamePreview } from '../model';

export function useGamePreview(gamePreview: GamePreview) {
  const currentBestCatalog = getBestCatalog(gamePreview);

  return {
    currentBestCatalog,
  };
}
