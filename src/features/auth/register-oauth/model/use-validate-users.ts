import { useMutation } from '@tanstack/react-query';

import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/client';

export function useCheckNicknameMutation() {
  const core = new Core(createClient());

  return useMutation({
    mutationFn: core.users.checkNickname,
  });
}
