'use client';

import { SearchGameList, EmptySearchResult } from '@/features/search-game';
import { useSearchGameQuery, GamePreviewCard } from '@/entities/game';
import { DefaultLink } from '@/shared/ui/default-link';
import * as styles from './search-game-fetcher.css';

type SearchGameFetcherProps = {
  query: string;
};

export default function SearchGameFetcher({ query }: SearchGameFetcherProps) {
  const { data, isPending, isError } = useSearchGameQuery(query);

  // TODO: 로딩, 에러 ui 추가
  if (isPending) {
    return null;
  }

  if (isError) {
    return null;
  }

  // TODO: 검색 결과 없음 ui 추가
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
