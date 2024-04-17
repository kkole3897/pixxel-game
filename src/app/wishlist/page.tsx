'use client';

import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { GameList } from '@/src/widgets/game/ui/game-list';
import { DefaultLink } from '@/src/shared/ui/default-link';
import { GameBox } from '@/src/entities/game/ui';
import { useWishListGames } from '@/src/entities/wish-list';
import { DraggableWish } from '@/src/widgets/wish-list';

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
