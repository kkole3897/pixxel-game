import { useQueryClient } from '@tanstack/react-query';

import {
  useDeleteWishlistItemMutation,
  useGetWishListQuery,
  wishListQueryKeys,
} from '@/entities/wish-list';
import { type WishlistResponse } from '@/shared/api/core';

export function useOptimisticDeleteWishListItem(id: number) {
  const queryClient = useQueryClient();

  const { mutate } = useDeleteWishlistItemMutation();
  const { data } = useGetWishListQuery();

  const deleteWishListItem = () => {
    mutate(id, {
      onError: async () => {
        return await queryClient.invalidateQueries({
          queryKey: wishListQueryKeys.getWishList.queryKey,
        });
      },
    });

    queryClient.setQueryData<WishlistResponse>(
      wishListQueryKeys.getWishList.queryKey,
      (oldData) => {
        return oldData?.filter((item) => item.id !== id);
      }
    );
    const publicId = data?.find((item) => item.id === id)?.game?.publicId;
    if (!publicId) {
      return;
    }
    queryClient.invalidateQueries({
      queryKey:
        wishListQueryKeys.getWishlistItemByGamePublicId(publicId).queryKey,
    });
  };

  return {
    deleteWishListItem,
  };
}
