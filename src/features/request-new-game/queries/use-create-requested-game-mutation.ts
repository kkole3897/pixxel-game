import { useMutation } from '@tanstack/react-query';

import { requestNewGameQueryKeys } from './query-keys';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/client';
import { type CreateRequestedGameData } from '../model';

const core = new Core(createClient());

export function useCreateRequestedGameMutation() {
  return useMutation({
    mutationKey: requestNewGameQueryKeys.createRequestedGame.queryKey,
    mutationFn: (data: CreateRequestedGameData) =>
      core.newGameRequest.createRequestedGame({
        ...data,
        title: data.title ?? null,
      }),
  });
}
