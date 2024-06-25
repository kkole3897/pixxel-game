import { WishList } from '@/widgets/wishlist/wish-list';
import { DefaultLink } from '@/shared/ui/default-link';
import { GameBox } from '@/entities/game/ui';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/server';
import * as styles from './page.css';

export default async function WishListPage() {
  const core = new Core(createClient());

  const wishlist = await core.wishlist.getWishlist();
  const filteredWishlist = wishlist.filter(
    (wishlistItem) => wishlistItem.game !== null
  );

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
