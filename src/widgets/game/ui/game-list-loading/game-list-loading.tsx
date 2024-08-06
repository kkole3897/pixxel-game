import { GameList } from '../game-list';
import { GamePreviewCardSkeleton } from '@/entities/game';

export default function GameListLoading() {
  return (
    <GameList>
      {[...Array(10)].map((_, index) => (
        <GameList.Item key={index}>
          <GamePreviewCardSkeleton />
        </GameList.Item>
      ))}
    </GameList>
  );
}
