import { createQueryKeys } from '@lukemorales/query-key-factory';

export const wishListQueryKeys = createQueryKeys('wishList', {
  getWishList: null,
  getWishlistItemByGamePublicId: (gamePublicId: string) => [gamePublicId],
  addWishlistItem: null,
  deleteWishlistItem: null,
});
