'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { GameList } from '@/widgets/game/ui/game-list';
import { DefaultLink } from '@/shared/ui/default-link';
import { GameBox } from '@/entities/game/ui';
import { useWishListGames } from '@/entities/wish-list';
import { DraggableWish } from '@/widgets/wish-list';

export default function WishListPage() {
  const { games, isPending } = useWishListGames();

  if (isPending) {
    return <div>loading</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <GameList>
        {games.map((game) => {
          return (
            <GameList.Item key={game.id}>
              <DraggableWish id={game.id}>
                <DefaultLink href={`/game/${game.id}`}>
                  <GameBox game={game} />
                </DefaultLink>
              </DraggableWish>
            </GameList.Item>
          );
        })}
      </GameList>
    </DndProvider>
  );
}
