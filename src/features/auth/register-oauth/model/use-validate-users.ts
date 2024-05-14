import { useMutation } from '@tanstack/react-query';

import { core } from '@/shared/api';

export function useCheckNicknameMutation() {
  return useMutation({
    mutationFn: core.users.checkNickname,
  });
}
