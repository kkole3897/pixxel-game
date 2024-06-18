'use client';

import { RiHeartFill } from '@remixicon/react';
import { useRouter } from 'next/navigation';

import { useToggleWish } from '../../lib';
import * as styles from './wish-button.css';
import { revalidateWishlist } from './action';
import { createClient } from '@/shared/lib/supabase/client';

type WishButtonProps = {
  gameId: string;
};

export default function WishButton(props: WishButtonProps) {
  const supabase = createClient();
  const router = useRouter();

  const { isWished, toggle } = useToggleWish(props.gameId);
  const heartColor = isWished ? '#fff' : 'rgba(255, 255, 255, 0.5)';

  const handleClick = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session === null) {
      router.push('/login');
      return;
    }

    await toggle();
    revalidateWishlist();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.wishButton({ isWished })}
    >
      {<RiHeartFill size={20} color={heartColor} />}
    </button>
  );
}
