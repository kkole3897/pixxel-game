import { GameBox } from '@/entities/game/ui';
import { GameList } from '@/widgets/game/ui';
import { DefaultLink } from '@/shared/ui/default-link';
import { core } from '@/shared/api';

async function Games() {
  // const { games } = await core.games.getGames();

  // return (
  //   <GameList>
  //     {games.map((game) => {
  //       return (
  //         <GameList.Item key={game.id}>
  //           <DefaultLink href={`/game/${game.id}`}>
  //             <GameBox game={game} />
  //           </DefaultLink>
  //         </GameList.Item>
  //       );
  //     })}
  //   </GameList>
  // );
  return null;
}

export default Games;
