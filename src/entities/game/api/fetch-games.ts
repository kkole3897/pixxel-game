import { Game } from '../model';

export type FetchGamesOptions = {
  ids?: string[];
};

export async function fetchGames({ ids }: FetchGamesOptions = {}): Promise<{
  games: Game[];
}> {
  const params = ids?.map((id) => ['ids', id]);

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

export async function fetchGameDetail(id: string): Promise<{ game: Game }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${id}`,
    { next: { revalidate: 30 } }
  );

  if (!response.ok) {
    throw new Error('cannot get game : ' + id);
  }

  const data = await response.json();

  return data;
}
