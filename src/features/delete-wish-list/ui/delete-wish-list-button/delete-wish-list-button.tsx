'use client';

import { RiDeleteBinLine } from '@remixicon/react';
import cn from 'classnames';

import { useOptimisticDeleteWishListItem } from '../../lib';
import * as styles from './delete-wish-list-button.css';

type DeleteWishListButtonProps = {
  className?: string;
  targetId: number;
};

export default function DeleteWishListButton({
  className,
  targetId,
}: DeleteWishListButtonProps) {
  const composedClassName = cn(styles.button, className);

  const { deleteWishListItem } = useOptimisticDeleteWishListItem(targetId);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    deleteWishListItem();
  };

  return (
    <button
      type="button"
      className={composedClassName}
      aria-label="찜 목록에서 삭제"
      onClick={handleClick}
    >
      <RiDeleteBinLine size={20} />
    </button>
  );
}
