import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import { core } from '@/shared/api';

const wishListQueryKeys = createQueryKeys('wishList', {
  getWishList: (gameIds: string[]) => [{ gameIds }],
});

export function useGetWishListQuery(gameIds: string[]) {
  return useQuery({
    queryKey: wishListQueryKeys.getWishList(gameIds).queryKey,
    queryFn: () => core.games.getGames({ ids: gameIds }),
    enabled: gameIds.length > 0,
  });
}
