import { useQuery } from '@tanstack/react-query';

import { gameQueryKeys } from './query-keys';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/client';

export function useLowestPriceRanksQuery(publicId: string) {
  return useQuery({
    queryKey: gameQueryKeys.lowestPriceRanks(publicId).queryKey,
    queryFn: () => new Core(createClient()).games.getLowestPriceRanks(publicId),
  });
}
