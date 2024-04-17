import { useDrop } from 'react-dnd';

import { DRAG_TYPES } from '@/src/entities/dnd';
import { useWishListStore } from '@/src/entities/wish-list';

export function useDropWish(gameId: string) {
  const wishList = useWishListStore((state) => state.wishList);
  const changePriority = useWishListStore((state) => state.changePriority);

  const [{ id }, dropRef] = useDrop({
    accept: DRAG_TYPES.Wish,
    collect: (monitor) => {
      return {
        id: monitor.getHandlerId(),
      };
    },
    hover: (item) => {
      const _item = item as { id: string };

      const hoverId = gameId;
      const dragId = _item.id;

      if (hoverId === dragId) {
        return;
      }

      const hoverPriority = wishList[hoverId].priority;
      changePriority(dragId, hoverPriority);
    },
  });

  return {
    id,
    dropRef,
  };
}
