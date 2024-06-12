import { GamePreviewCard } from '@/entities/game/ui';
import { GameList } from '@/widgets/game/ui';
import { DefaultLink } from '@/shared/ui/default-link';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/server';

async function Games() {
  const core = new Core(createClient());
  const { games } = await core.games.getGames();

  return (
    <GameList>
      {games.map((game) => {
        return (
          <GameList.Item key={game.id}>
            <DefaultLink href={`/game/${game.publicId}`}>
              <GamePreviewCard gamePreview={game} />
            </DefaultLink>
          </GameList.Item>
        );
      })}
    </GameList>
  );
}

export default Games;
