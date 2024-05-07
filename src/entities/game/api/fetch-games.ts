import { Game } from '../model';
import { coreApi } from '@/shared/api';

export type FetchGamesOptions = {
  ids?: string[];
};

export async function fetchGames({ ids }: FetchGamesOptions = {}): Promise<{
  games: Game[];
}> {
  const params = ids?.map((id) => ['ids', id]);

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

export async function fetchGameDetail(id: string): Promise<{ game: Game }> {
  const response = await coreApi(`/games/${id}`, { next: { revalidate: 30 } });

  if (!response.ok) {
    throw new Error('cannot get game : ' + id);
  }

  const data = await response.json();

  return data;
}
