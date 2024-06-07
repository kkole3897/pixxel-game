import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery, useMutation } from '@tanstack/react-query';

import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/client';

export const wishlistKeys = createQueryKeys('wishList', {
  getWishList: null,
  getWishlistItemByGamePublicId: (gamePublicId: string) => [gamePublicId],
  addWishlistItem: null,
  deleteWishlistItem: null,
});

const core = new Core(createClient());

export function useGetWishListQuery() {
  return useQuery({
    queryKey: wishlistKeys.getWishList.queryKey,
    queryFn: () => core.wishlist.getWishlist(),
  });
}

export function useGetWishlistItemByGamePublicIdQuery(
  gamePublicId: string,
  { enabled = true } = {}
) {
  return useQuery({
    queryKey: wishlistKeys.getWishlistItemByGamePublicId(gamePublicId).queryKey,
    queryFn: () => core.wishlist.getWishlistItemByGamePublicId(gamePublicId),
    enabled: enabled,
  });
}

export function useAddWishlistItemMutation() {
  return useMutation({
    mutationKey: wishlistKeys.addWishlistItem.queryKey,
    mutationFn: (gamePublicId: string) =>
      core.wishlist.addWishlistItem(gamePublicId),
  });
}

export function useDeleteWishlistItemMutation() {
  return useMutation({
    mutationKey: wishlistKeys.deleteWishlistItem.queryKey,
    mutationFn: (wishlistItemId: number) =>
      core.wishlist.deleteWishlistItem(wishlistItemId),
  });
}
