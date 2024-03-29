'use client';

import { RiHeartLine, RiHeartFill } from '@remixicon/react';
import { useRecoilState } from 'recoil';
import { useMemo } from 'react';

import { wishListState } from '@/store/atoms/wish-list';
import * as styles from './wish-button.css';

type WishButtonProps = {
  gameId: string;
};

export default function WishButton(props: WishButtonProps) {
  const [wishList, setWishList] = useRecoilState(wishListState);

  const toggleWishList = () => {
    if (wishList.includes(props.gameId)) {
      setWishList(wishList.filter((wishAppId) => wishAppId !== props.gameId));
    } else {
      setWishList([...wishList, props.gameId]);
    }
  };

  const isInWishList = useMemo(
    () => wishList.includes(props.gameId),
    [props.gameId, wishList]
  );

  return (
    <button
      type="button"
      onClick={toggleWishList}
      className={styles.wishButton}
    >
      {isInWishList ? <RiHeartFill color="red" /> : <RiHeartLine />}
    </button>
  );
}
