'use client';

import { RiHeartLine, RiHeartFill } from '@remixicon/react';

import { useToggleWish } from '../../lib';
import * as styles from './wish-button.css';
import { revalidateWishlist } from './action';

type WishButtonProps = {
  gameId: string;
};

export default function WishButton(props: WishButtonProps) {
  const { isWished, toggle } = useToggleWish(props.gameId);

  const handleClick = async () => {
    await toggle();
    revalidateWishlist();
  };

  return (
    <button type="button" onClick={handleClick} className={styles.wishButton}>
      {isWished ? <RiHeartFill color="red" /> : <RiHeartLine />}
    </button>
  );
}
