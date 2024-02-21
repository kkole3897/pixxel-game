import Link from 'next/link';

import { GameBox } from './components/game-box';
import { getGames } from '@/api/game';
import * as style from './page.css';

function Games() {
  const games = getGames();

  return (
    <ol className={style.gameList}>
      {games.map((game) => {
        return (
          <li key={game.id} className={style.gameListItem}>
            <Link href={`/game/${game.id}`} className={style.link}>
              <GameBox game={game} />
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export default Games;
