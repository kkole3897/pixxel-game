'use client';

import { useWishListStore } from '@/src/entities/wish-list/stores';
import { useFetchAppsQuery } from '@/src/entities/game/queries';
import { GameList } from '@/src/widgets/game/ui/game-list';
import { DefaultLink } from '@/src/shared/ui/default-link';
import { GameBox } from '@/src/entities/game/ui';
import { useEffect } from 'react';

export default function WishListPage() {
  const wishList = useWishListStore((state) => state.wishList);
  const { data, isPending, isError } = useFetchAppsQuery(
    { ids: Object.keys(wishList) },
    { enabled: Object.keys(wishList).length > 0 }
  );

  useEffect(() => {
    useWishListStore.persist.rehydrate();
  });

  if (Object.keys(wishList).length === 0) {
    return <div>wish empty</div>;
  }

  if (isPending) {
    return <div>loading</div>;
  }

  if (isError || !data) {
    return <div>error</div>;
  }

  const { games } = data;

  return (
    <GameList>
      {games.map((game) => {
        return (
          <GameList.Item key={game.id}>
            <DefaultLink href={`/game/${game.id}`}>
              <GameBox game={game} />
            </DefaultLink>
          </GameList.Item>
        );
      })}
    </GameList>
  );
}
