import { useMutation } from '@tanstack/react-query';
import { createQueryKeys } from '@lukemorales/query-key-factory';

import { core } from '@/shared/api';

export function useCheckNicknameMutation() {
  return useMutation({
    mutationFn: core.users.checkNickname,
  });
}
