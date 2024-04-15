import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import { fetchWishListGames } from '../api';

const wishListQueryKeys = createQueryKeys('wishList', {
  fetchWishListGames: (gameIds: string[]) => [{ gameIds }],
});

export function useFetchWishListGamesQuery(gameIds: string[]) {
  return useQuery({
    queryKey: wishListQueryKeys.fetchWishListGames(gameIds).queryKey,
    queryFn: () => fetchWishListGames(gameIds),
    enabled: gameIds.length > 0,
  });
}
