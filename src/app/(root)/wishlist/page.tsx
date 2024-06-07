import { GameList } from '@/widgets/game/ui/game-list';
import { DefaultLink } from '@/shared/ui/default-link';
import { GameBox } from '@/entities/game/ui';
import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/server';

export default async function WishListPage() {
  const core = new Core(createClient());

  const wishlist = await core.wishlist.getWishlist();
  const filteredWishlist = wishlist.filter(
    (wishlistItem) => wishlistItem.game !== null
  );

  return (
    <GameList>
      {filteredWishlist.map((wishlistItem) => {
        return (
          <GameList.Item key={wishlistItem.id}>
            <DefaultLink href={`/game/${wishlistItem.game!.publicId}`}>
              <GameBox game={wishlistItem.game!} />
            </DefaultLink>
          </GameList.Item>
        );
      })}
    </GameList>
  );
}
