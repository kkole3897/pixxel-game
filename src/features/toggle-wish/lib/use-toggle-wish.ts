import { useWishState } from './use-wish-state';
import {
  useAddWishlistItemMutation,
  useDeleteWishlistItemMutation,
} from '@/entities/wish-list';

export function useToggleWish(gamePublicId: string) {
  const {
    isWished,
    setControllable,
    setControlledWished,
    wishId,
    forceUpdate,
  } = useWishState(gamePublicId);

  const { mutate: mutateAddWishlistItem } = useAddWishlistItemMutation();
  const { mutate: mutateDeleteWishlistItem } = useDeleteWishlistItemMutation();

  const toggle = async () => {
    if (!isWished) {
      mutateAddWishlistItem(gamePublicId, {
        onSuccess: (data) => {
          forceUpdate(data);
        },
        onError: () => {
          setControlledWished(false);
        },
        onSettled: () => {
          setControllable(false);
        },
      });
      setControlledWished(true);
      setControllable(true);
      return;
    }

    if (!wishId) {
      return;
    }

    mutateDeleteWishlistItem(wishId, {
      onSuccess: () => {
        forceUpdate(null);
      },
      onError: () => {
        setControlledWished(true);
      },
      onSettled: () => {
        setControllable(false);
      },
    });
    setControlledWished(false);
    setControllable(true);
  };

  return {
    isWished,
    toggle,
  };
}
