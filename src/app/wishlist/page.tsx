'use client';

import { useMemo } from 'react';

import { useWishListStore } from '@/stores/wish-list';
import { useFetchAppsQuery } from '@/queries/apps';
import { GameList } from '@/app/components/game-list';
import { GameLink } from '@/app/components/game-link';
import { GameBox } from '@/app/components/game-box';

export default function WishListPage() {
  const wishList = useWishListStore((state) => state.wishList);
  const gameIds = useMemo(() => Object.keys(wishList), [wishList]);
  const { data, isPending, isError } = useFetchAppsQuery(
    { ids: gameIds },
    { enabled: gameIds.length > 0 }
  );

  if (Object.keys(wishList).length === 0) {
    return <div>wish empty</div>;
  }

  if (isPending) {
    return <div>loading</div>;
  }

  if (isError || !data) {
    return <div>error</div>;
  }

  const { apps: games } = data;

  return (
    <GameList>
      {games.map((game) => {
        return (
          <GameList.Item key={game.id}>
            <GameLink href={`/game/${game.id}`}>
              <GameBox game={game} />
            </GameLink>
          </GameList.Item>
        );
      })}
    </GameList>
  );
}
