import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/client';

const wishListQueryKeys = createQueryKeys('wishList', {
  getWishList: (gameIds: number[]) => [{ gameIds }],
});

export function useGetWishListQuery(gameIds: number[]) {
  const core = new Core(createClient());

  return useQuery({
    queryKey: wishListQueryKeys.getWishList(gameIds).queryKey,
    queryFn: () => core.games.getGames({ ids: gameIds }),
    enabled: gameIds.length > 0,
  });
}
