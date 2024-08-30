import { GameStore } from './game-store';
import { GameDrm } from './game-drm';

export interface GameCatalogItem {
  id: number;
  gameId: number | null;
  url: string;
  store: GameStore;
  drm: GameDrm;
  regularPrice: number | null;
  currentPrice: number | null;
  currentPriceExpireAt: string | null;
  lowestPrice: number | null;
  lowestPriceUpdatedAt: string | null;
  salesEndedAt: string | null;
}
