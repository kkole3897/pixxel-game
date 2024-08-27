import { useQuery } from '@tanstack/react-query';

import { gameQueryKeys } from './query-keys';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/client';

export function useSearchGameQuery(query: string) {
  return useQuery({
    queryKey: gameQueryKeys.search(query).queryKey,
    queryFn: () => new Core(createClient()).games.search(query),
  });
}
