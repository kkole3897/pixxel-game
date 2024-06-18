import { useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import {
  useGetWishlistItemByGamePublicIdQuery,
  wishListQueryKeys,
} from '@/entities/wish-list';

export function useWishState(gamePublicId: string) {
  const queryClient = useQueryClient();

  const { data, refetch } = useGetWishlistItemByGamePublicIdQuery(gamePublicId);
  const [controllable, setControllable] = useState(false);
  const [controlledWished, setControlledWished] = useState(data != null);
  const isWished = useMemo(() => {
    if (controllable) {
      return controlledWished;
    }

    return data != null;
  }, [data, controllable, controlledWished]);
  const wishId = data?.id;

  const forceUpdate = (newData: Exclude<typeof data, undefined>) => {
    queryClient.setQueryData(
      wishListQueryKeys.getWishlistItemByGamePublicId(gamePublicId).queryKey,
      newData
    );
  };

  return {
    isWished,
    setControllable,
    setControlledWished,
    wishId,
    refetch,
    forceUpdate,
  };
}
