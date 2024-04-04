import { GameBox } from '@/src/entities/game/ui';
import { GameList } from '@/src/widgets/game/ui';
import { DefaultLink } from '@/src/shared/ui/default-link';
import { fetchGames } from '@/src/entities/game/api';

async function Games() {
  const { games } = await fetchGames();

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

export default Games;
