'use client';

import { RiHeartLine, RiHeartFill } from '@remixicon/react';

import { useToggleWish } from '../../lib';
import * as styles from './wish-button.css';

type WishButtonProps = {
  gameId: string;
};

export default function WishButton(props: WishButtonProps) {
  const { isWished, toggle } = useToggleWish(props.gameId);

  return (
    <button
      type="button"
      onClick={() => toggle()}
      className={styles.wishButton}
    >
      {isWished ? <RiHeartFill color="red" /> : <RiHeartLine />}
    </button>
  );
}
