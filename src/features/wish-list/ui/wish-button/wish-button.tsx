'use client';

import { RiHeartLine, RiHeartFill } from '@remixicon/react';
import { useMemo } from 'react';

import { useWishListStore } from '@/src/entities/wish-list/stores';

import * as styles from './wish-button.css';

type WishButtonProps = {
  gameId: string;
};

export default function WishButton(props: WishButtonProps) {
  const wishList = useWishListStore((state) => state.wishList);
  const addGame = useWishListStore((state) => state.addGame);
  const removeGame = useWishListStore((state) => state.removeGame);

  const isExisted = useMemo(
    () => Object.keys(wishList ?? {}).includes(props.gameId),
    [props.gameId, wishList]
  );

  const toggleWishList = () => {
    if (isExisted) {
      removeGame(props.gameId);
      return;
    }

    addGame(props.gameId);
  };

  return (
    <button
      type="button"
      onClick={toggleWishList}
      className={styles.wishButton}
    >
      {isExisted ? <RiHeartFill color="red" /> : <RiHeartLine />}
    </button>
  );
}
