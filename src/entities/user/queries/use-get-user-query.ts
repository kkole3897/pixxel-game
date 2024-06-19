import { useQuery } from '@tanstack/react-query';

import { userQueryKeys } from './query-keys';
import { createClient } from '@/shared/lib/supabase/client';
import { Core } from '@/shared/api/core';

export function useGetUserQuery() {
  return useQuery({
    queryKey: userQueryKeys.getUser.queryKey,
    queryFn: () => new Core(createClient()).auth.getUserFromSession(),
  });
}
