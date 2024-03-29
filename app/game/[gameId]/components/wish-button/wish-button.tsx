'use client';

import { RiHeartLine, RiHeartFill } from '@remixicon/react';
import { useMemo } from 'react';

import { useWishListStore } from '@/stores/wish-list';

import * as styles from './wish-button.css';

type WishButtonProps = {
  gameId: string;
};

export default function WishButton(props: WishButtonProps) {
  const games = useWishListStore((state) => state.games);
  const addGame = useWishListStore((state) => state.addGame);
  const removeGame = useWishListStore((state) => state.removeGame);

  const isExisted = useMemo(
    () => Object.keys(games ?? {}).includes(props.gameId),
    [props.gameId, games]
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
