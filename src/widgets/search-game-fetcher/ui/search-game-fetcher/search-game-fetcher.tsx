'use client';

import { SearchGameList, EmptySearchResult } from '@/features/search-game';
import {
  useSearchGameQuery,
  GamePreviewCard,
  GamePreviewCardSkeleton,
} from '@/entities/game';
import { DefaultLink } from '@/shared/ui/default-link';
import * as styles from './search-game-fetcher.css';

type SearchGameFetcherProps = {
  query: string;
};

export default function SearchGameFetcher({ query }: SearchGameFetcherProps) {
  const { data, isPending, isError } = useSearchGameQuery(query);

  if (isPending) {
    return (
      <SearchGameList>
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <SearchGameList.Item key={index}>
              <GamePreviewCardSkeleton />
            </SearchGameList.Item>
          ))}
      </SearchGameList>
    );
  }

  // TODO: 에러 ui 추가
  if (isError) {
    return null;
  }

  if (data.length === 0) {
    return <EmptySearchResult className={styles.emptySearchResult} />;
  }

  return (
    <SearchGameList>
      {data.map((game) => (
        <SearchGameList.Item key={game.id}>
          <DefaultLink href={`/game/${game.publicId}`}>
            <GamePreviewCard gamePreview={game} />
          </DefaultLink>
        </SearchGameList.Item>
      ))}
    </SearchGameList>
  );
}
