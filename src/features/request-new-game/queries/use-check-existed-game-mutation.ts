import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestNewGameQueryKeys } from './query-keys';
import { type RequestedGameStoreIdentifier } from '../model';
import { createClient } from '@/shared/lib/supabase/client';
import { Core } from '@/shared/api/core';

const core = new Core(createClient());

export function useCheckExistedGameMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: requestNewGameQueryKeys.checkExistedGame.queryKey,
    mutationFn: async (data: RequestedGameStoreIdentifier) =>
      core.newGameRequest.checkExistedGame(data),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        requestNewGameQueryKeys.getExistedGame(variables).queryKey,
        data
      );
    },
  });
}
