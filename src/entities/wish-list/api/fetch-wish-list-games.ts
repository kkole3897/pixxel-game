import type { Game } from '@/entities/game';
import { coreApi } from '@/shared/api';

export async function fetchWishListGames(
  gameIds: string[]
): Promise<{ games: Game[] }> {
  if (gameIds.length === 0) {
    return { games: [] };
  }

  const params = gameIds.map((id) => ['ids', id]);
  const query = new URLSearchParams(params);

  const response = await coreApi(`/games?${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error('cannot get games');
  }

  const data = await response.json();

  return data;
}
