'use client';

import { GameList } from '@/src/widgets/game/ui/game-list';
import { DefaultLink } from '@/src/shared/ui/default-link';
import { GameBox } from '@/src/entities/game/ui';
import { useWishListGames } from '@/src/entities/wish-list';

export default function WishListPage() {
  const { games, isPending } = useWishListGames();

  if (isPending) {
    return <div>loading</div>;
  }

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
