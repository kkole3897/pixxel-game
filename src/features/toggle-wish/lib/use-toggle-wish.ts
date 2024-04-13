import { useWishListStore } from '@/src/entities/wish-list';
import { useMemo } from 'react';

export function useToggleWish(gameId: string) {
  const wishList = useWishListStore((state) => state.wishList);
  const addGame = useWishListStore((state) => state.addGame);
  const removeGame = useWishListStore((state) => state.removeGame);

  const isExisted = useMemo(() => {
    const _isExisted = Object.keys(wishList).includes(gameId);

    return _isExisted;
  }, [wishList, gameId]);

  const toggle = () => {
    if (isExisted) {
      removeGame(gameId);
    } else {
      addGame(gameId);
    }
  };

  return {
    isExisted,
    toggle,
  };
}
