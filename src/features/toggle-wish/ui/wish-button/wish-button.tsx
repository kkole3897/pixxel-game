'use client';

import { RiHeartLine, RiHeartFill } from '@remixicon/react';

import { useToggleWish } from '../../lib';
import * as styles from './wish-button.css';

type WishButtonProps = {
  gameId: string;
};

export default function WishButton(props: WishButtonProps) {
  const { isExisted, toggle } = useToggleWish(props.gameId);

  return (
    <button
      type="button"
      onClick={() => toggle()}
      className={styles.wishButton}
    >
      {isExisted ? <RiHeartFill color="red" /> : <RiHeartLine />}
    </button>
  );
}
