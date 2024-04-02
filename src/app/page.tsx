import Link from 'next/link';

import { GameBox } from '@/app/components/game-box';
import { GameList } from '@/app/components/game-list';
import { fetchApps } from '@/api/apps';
import * as style from './page.css';

async function Games() {
  const { apps: games } = await fetchApps();

  return (
    <GameList>
      {games.map((game) => {
        return (
          <GameList.Item key={game.id}>
            <Link href={`/game/${game.id}`} className={style.link}>
              <GameBox game={game} />
            </Link>
          </GameList.Item>
        );
      })}
    </GameList>
  );
}

export default Games;
