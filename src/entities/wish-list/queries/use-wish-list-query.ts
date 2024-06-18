import { useQuery, useMutation } from '@tanstack/react-query';

import { wishListQueryKeys } from './query-keys';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/client';

const core = new Core(createClient());

export function useGetWishListQuery() {
  return useQuery({
    queryKey: wishListQueryKeys.getWishList.queryKey,
    queryFn: () => core.wishlist.getWishlist(),
  });
}

export function useGetWishlistItemByGamePublicIdQuery(
  gamePublicId: string,
  { enabled = true } = {}
) {
  return useQuery({
    queryKey:
      wishListQueryKeys.getWishlistItemByGamePublicId(gamePublicId).queryKey,
    queryFn: () => core.wishlist.getWishlistItemByGamePublicId(gamePublicId),
    enabled: enabled,
  });
}

export function useAddWishlistItemMutation() {
  return useMutation({
    mutationKey: wishListQueryKeys.addWishlistItem.queryKey,
    mutationFn: (gamePublicId: string) =>
      core.wishlist.addWishlistItem(gamePublicId),
  });
}

export function useDeleteWishlistItemMutation() {
  return useMutation({
    mutationKey: wishListQueryKeys.deleteWishlistItem.queryKey,
    mutationFn: (wishlistItemId: number) =>
      core.wishlist.deleteWishlistItem(wishlistItemId),
  });
}
