'use client';

import { RiHeartFill } from '@remixicon/react';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

import { useToggleWish } from '../../lib';
import * as styles from './wish-button.css';
import { createClient } from '@/shared/lib/supabase/client';
import { wishListQueryKeys } from '@/entities/wish-list';

type WishButtonProps = {
  gameId: string;
};

export default function WishButton(props: WishButtonProps) {
  const supabase = createClient();
  const router = useRouter();
  const queryClient = useQueryClient();

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
    queryClient.invalidateQueries({
      queryKey: wishListQueryKeys.getWishList.queryKey,
      exact: true,
    });
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
