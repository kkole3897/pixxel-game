'use client';

import { useGamesInfiniteQuery } from '@/entities/game';
import { GameList } from '../game-list';
import { DefaultLink } from '@/shared/ui/default-link';
import { GamePreviewCard } from '@/entities/game';
import { FetchMoreGamesTrigger } from '@/features/fetch-more-games';
import { GameListLoading } from '../game-list-loading';

export default function GameListFetcher() {
  const { data, status, isFetchingNextPage } = useGamesInfiniteQuery();

  if (status === 'pending') {
    return <GameListLoading />;
  } else if (status === 'error') {
    // TODO: error ui 처리
    return null;
  }

  return (
    <>
      <GameList>
        {data.pages.map((page) => {
          return page.games.map((game) => {
            return (
              <GameList.Item key={game.id}>
                <DefaultLink href={`/game/${game.publicId}`}>
                  <GamePreviewCard gamePreview={game} />
                </DefaultLink>
              </GameList.Item>
            );
          });
        })}
      </GameList>
      {isFetchingNextPage && <GameListLoading />}
      <FetchMoreGamesTrigger />
    </>
  );
}
