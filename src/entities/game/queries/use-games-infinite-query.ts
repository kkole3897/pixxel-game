import { useInfiniteQuery } from '@tanstack/react-query';

import { gameQueryKeys } from './query-keys';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/client';

export function useGamesInfiniteQuery() {
  const core = new Core(createClient());

  return useInfiniteQuery({
    queryKey: gameQueryKeys.list.queryKey,
    queryFn: ({ pageParam }) => core.games.getGames({ ...pageParam }),
    initialPageParam: { from: 0, to: 99 },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.games.length < 100) {
        return null;
      }

      const from = allPages.reduce((acc, page) => acc + page.games.length, 0);
      const to = from + 99;

      return {
        from,
        to,
      };
    },
  });
}
