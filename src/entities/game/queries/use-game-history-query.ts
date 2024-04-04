import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import { fetchGamePriceHistory } from '../api';

const gameHistoryQueryKeys = createQueryKeys('gameHistory', {
  fetchGamePriceHistory: (gameId: string) => ['price', { gameId }],
});

export function useFetchGamePriceHistoryQuery(gameId: string) {
  return useQuery({
    queryKey: gameHistoryQueryKeys.fetchGamePriceHistory(gameId).queryKey,
    queryFn: () => fetchGamePriceHistory(gameId),
  });
}
