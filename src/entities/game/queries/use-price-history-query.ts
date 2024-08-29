import { useQuery } from '@tanstack/react-query';

import { gameQueryKeys } from './query-keys';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/client';

const core = new Core(createClient());

export function useGetPriceHistoryQuery(gamePublicId: string) {
  return useQuery({
    queryKey: gameQueryKeys.priceHistory(gamePublicId).queryKey,
    queryFn: () => core.games.getPriceHistory(gamePublicId),
  });
}

export function useGetBestPriceHistoryQuery(gamePublicId: string) {
  return useQuery({
    queryKey: gameQueryKeys.bestPriceHistory(gamePublicId).queryKey,
    queryFn: () => core.games.getBestPriceHistoryByGamePublicId(gamePublicId),
  });
}
