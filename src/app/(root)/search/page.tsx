import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import { Metadata } from 'next';

import { SearchGameFetcher } from '@/widgets/search-game-fetcher';
import {
  parseSearchPageSearchParams,
  type SearchPageSearchParams,
} from '@/features/search-game/lib/parse-search-page-params';
import { gameQueryKeys } from '@/entities/game';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/server';

type SearchPageProps = {
  searchParams: SearchPageSearchParams;
};

export function generateMetadata({ searchParams }: SearchPageProps): Metadata {
  const { query } = parseSearchPageSearchParams(searchParams);

  const title = `${query}의 검색 결과 - Pixxel Game`;

  return {
    title: title,
    openGraph: {
      title,
    },
    twitter: {
      title,
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query } = parseSearchPageSearchParams(searchParams);

  if (!query) {
    // TODO: empty page 처리
    return null;
  }

  const queryClient = new QueryClient();
  const core = new Core(createClient());

  await queryClient.prefetchQuery({
    queryKey: gameQueryKeys.search(query).queryKey,
    queryFn: () => core.games.search(query),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchGameFetcher query={query} />
    </HydrationBoundary>
  );
}