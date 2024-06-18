import { useQuery } from '@tanstack/react-query';

import { gameQueryKeys } from './query-keys';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/client';

export function useGameDetailQuery(publicId: string) {
  return useQuery({
    queryKey: gameQueryKeys.detail(publicId).queryKey,
    queryFn: () => new Core(createClient()).games.getGame(publicId),
  });
}
