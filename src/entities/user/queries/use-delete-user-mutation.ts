import { useMutation } from '@tanstack/react-query';

import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/client';

export function useDeleteUserMutation() {
  return useMutation({
    mutationFn: () => new Core(createClient()).auth.deleteUser(),
  });
}
