'use client';

import { useSearchParams } from 'next/navigation';

import { useSearchQueryStore } from './use-search-query-store';

export function useDefaultSearchQuery() {
  const defaultQuery = useSearchQueryStore((store) => store.query);
  const setQuery = useSearchQueryStore((store) => store.setQuery);

  const searchParams = useSearchParams();

  const setDefaultQuery = () => {
    const newQuery = searchParams.get('query') ?? '';
    setQuery(newQuery);
  };

  return {
    defaultQuery,
    setDefaultQuery,
  };
}
