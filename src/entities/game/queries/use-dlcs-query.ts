import { useQuery } from '@tanstack/react-query';

import { gameQueryKeys } from './query-keys';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/client';

export function useDlcsQuery(id: number) {
  return useQuery({
    queryKey: gameQueryKeys.dlcs(id).queryKey,
    queryFn: () => new Core(createClient()).games.getDlcs(id),
  });
}
