import type { Game } from '@/src/entities/game';

export async function fetchWishListGames(
  gameIds: string[]
): Promise<{ games: Game[] }> {
  if (gameIds.length === 0) {
    return { games: [] };
  }

  const params = gameIds.map((id) => ['ids', id]);
  const query = new URLSearchParams(params);
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/games?${query}`);

  const response = await fetch(url.href, {
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
