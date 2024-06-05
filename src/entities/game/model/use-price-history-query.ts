import { useQuery } from '@tanstack/react-query';
import { createQueryKeys } from '@lukemorales/query-key-factory';

import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/client';

const core = new Core(createClient());

const priceHistoryQueryKeys = createQueryKeys('priceHistory', {
  getPriceHistory: (gamePublicId: string) => [{ gamePublicId }],
  getBestPriceHistory: (gamePublicId: string) => [{ gamePublicId }],
});

export function useGetPriceHistoryQuery(gamePublicId: string) {
  return useQuery({
    queryKey: priceHistoryQueryKeys.getPriceHistory(gamePublicId).queryKey,
    queryFn: () => core.games.getPriceHistory(gamePublicId),
  });
}

export function useGetBestPriceHistoryQuery(gamePublicId: string) {
  return useQuery({
    queryKey: priceHistoryQueryKeys.getBestPriceHistory(gamePublicId).queryKey,
    queryFn: () => core.games.getBestPriceHistoryByGamePublicId(gamePublicId),
  });
}
