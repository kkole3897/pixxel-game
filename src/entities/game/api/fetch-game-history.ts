import { PriceHistoryRecord } from '../model';
import { GameStore } from '../model';

export async function fetchGamePriceHistory(
  gameId: string
): Promise<{ history: { [K in GameStore]?: PriceHistoryRecord[] } }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${gameId}/price-history`,
    { next: { revalidate: 30 } }
  );

  if (!response.ok) {
    throw new Error('cannot fetch game price history');
  }

  const data = await response.json();

  return data;
}
