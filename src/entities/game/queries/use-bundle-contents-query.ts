import { useQuery } from '@tanstack/react-query';

import { gameQueryKeys } from './query-keys';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/client';

export function useBundleContentsQuery(id: number) {
  return useQuery({
    queryKey: gameQueryKeys.bundleContents(id).queryKey,
    queryFn: () => new Core(createClient()).games.getGameBundleContents(id),
  });
}
