import { PriceHistoryRecord } from '../model';
import { GameStore } from '../model';
import { coreApi } from '@/shared/api';

export async function fetchGamePriceHistory(
  gameId: string
): Promise<{ history: { [K in GameStore]?: PriceHistoryRecord[] } }> {
  const response = await coreApi(`/games/${gameId}/price-history`, {
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error('cannot fetch game price history');
  }

  const data = await response.json();

  return data;
}
