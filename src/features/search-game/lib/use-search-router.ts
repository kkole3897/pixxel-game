'use client';

import { useRouter } from 'next/navigation';
import type { SearchFormData } from './use-search-form';

function toSearchQuery(keyword: string) {
  const query = keyword.replace(/\s+/g, '+');

  return query;
}

export function useSearchRouter() {
  const router = useRouter();

  function searchGame(searchFormData: SearchFormData) {
    const { keyword } = searchFormData;

    if (keyword.length === 0) {
      return;
    }

    const query = toSearchQuery(keyword);
    const href = `/search?query=${query}`;

    router.push(href);
  }

  return { searchGame };
}
