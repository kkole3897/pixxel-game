import { Metadata } from 'next';

import { WishList } from '@/widgets/wishlist/wish-list';
import { DefaultLink } from '@/shared/ui/default-link';
import { GameBox } from '@/entities/game';
import { EmptyWishListGuide } from '@/widgets/wishlist/empty-wish-list-guide';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/server';
import * as styles from './page.css';

export const metadata: Metadata = {
  title: '찜 - Pixxel Game',
  openGraph: {
    title: '찜 - Pixxel Game',
  },
  twitter: {
    title: '찜 - Pixxel Game',
  },
};

export default async function WishListPage() {
  const core = new Core(createClient());

  const wishlist = await core.wishlist.getWishlist();
  const filteredWishlist = wishlist.filter(
    (wishlistItem) => wishlistItem.game !== null
  );

  if (filteredWishlist.length === 0) {
    return <EmptyWishListGuide className={styles.empty} />;
  }

  return (
    <WishList.Root className={styles.list}>
      {filteredWishlist.map((wishlistItem) => {
        return (
          <WishList.Item key={wishlistItem.id}>
            <DefaultLink href={`/game/${wishlistItem.game!.publicId}`}>
              <GameBox game={wishlistItem.game!} />
            </DefaultLink>
          </WishList.Item>
        );
      })}
    </WishList.Root>
  );
}
