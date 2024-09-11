'use client';

import { EmptyWishListGuide } from '../empty-wish-list-guide';
import * as WishList from '../wish-list';
import { DeleteWishListButton } from '@/features/delete-wish-list';
import { useGetWishListQuery } from '@/entities/wish-list';
import { GameBox } from '@/entities/game';
import { DefaultLink } from '@/shared/ui/default-link';
import * as styles from './wish-list-fetcher.css';

export default function WishListFetcher() {
  const { data: wishList, isPending, isError } = useGetWishListQuery();

  if (isPending) {
    return null;
  }

  if (isError) {
    // TODO: get wishlist error ui 추가
    return null;
  }

  const filteredWishList = wishList.filter(
    (wishlistItem) => wishlistItem.game !== null
  );

  if (filteredWishList.length === 0) {
    return <EmptyWishListGuide className={styles.empty} />;
  }

  return (
    <WishList.Root className={styles.list}>
      {filteredWishList.map((item) => {
        return (
          <WishList.Item key={item.id}>
            <DefaultLink
              href={`/game/${item.game!.publicId}`}
              className={styles.link}
            >
              <GameBox game={item.game!} />
              <DeleteWishListButton targetId={item.id} />
            </DefaultLink>
          </WishList.Item>
        );
      })}
    </WishList.Root>
  );
}
