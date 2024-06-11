import { GameStore } from './game-store';

export interface PriceHistoryRecord {
  id: string;
  gameCatalogId: number;
  regularPrice: number;
  currentPrice: number;
  startAt: string;
  endAt: string | null;
}
