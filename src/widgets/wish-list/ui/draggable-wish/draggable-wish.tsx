'use client';

import { PropsWithChildren } from 'react';
import { RiDraggable } from '@remixicon/react';

import { useDragWish, useDropWish } from '@/features/drag-wish-priority';
import * as styles from './style.css';

type DraggalbeWishProps = PropsWithChildren & {
  id: string;
};

export default function DraggableWish({ id, children }: DraggalbeWishProps) {
  const { dragRef, dragPreviewRef } = useDragWish(id);
  const { dropRef } = useDropWish(id);
  const composedDndRefs = (instance: HTMLDivElement | null) => {
    dragPreviewRef(instance);
    dropRef(instance);
  };

  return (
    <div ref={composedDndRefs} className={styles.dragContainer}>
      <div ref={dragRef} className={styles.dragIconArea}>
        <RiDraggable />
      </div>
      <div className={styles.dragContentArea}>{children}</div>
    </div>
  );
}
