import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import { fetchGames, fetchGameDetail, type FetchGamesOptions } from '../api';

const gamesQueryKeys = createQueryKeys('games', {
  fetchGames: (options: FetchGamesOptions) => [options],
  fetchGameDetail: (id: string) => [id],
});

export function useFetchAppsQuery(
  requestOptions: FetchGamesOptions = {},
  queryOptions: { enabled?: boolean } = {}
) {
  const { enabled = true } = queryOptions;

  return useQuery({
    queryKey: gamesQueryKeys.fetchGames(requestOptions).queryKey,
    queryFn: () => fetchGames(requestOptions),
    enabled,
  });
}

export function useFetchAppDetailQuery(id: string) {
  return useQuery({
    queryKey: gamesQueryKeys.fetchGameDetail(id).queryKey,
    queryFn: () => fetchGameDetail(id),
  });
}
