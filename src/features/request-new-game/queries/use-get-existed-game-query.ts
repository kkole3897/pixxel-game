import { useQuery } from '@tanstack/react-query';

import { requestNewGameQueryKeys } from './query-keys';
import { GameStore } from '@/entities/game';
import { createClient } from '@/shared/lib/supabase/client';
import { Core } from '@/shared/api/core';

const core = new Core(createClient());

export function useGetExistedGameQuery(
  payload: {
    store: GameStore;
    slug: string;
  } | null
) {
  return useQuery({
    queryKey: requestNewGameQueryKeys.getExistedGame(payload).queryKey,
    queryFn: async ({ queryKey }) => {
      const { payload } = queryKey[2];

      if (!payload) {
        return null;
      }

      return await core.newGameRequest.checkExistedGame(payload);
    },
    enabled: !!payload,
  });
}
