import { useDrag } from 'react-dnd';

import { DRAG_TYPES } from '@/entities/dnd';

export function useDragWish(gameId: string) {
  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag(() => ({
    type: DRAG_TYPES.Wish,
    item: { id: gameId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return {
    isDragging,
    dragRef,
    dragPreviewRef,
  };
}
