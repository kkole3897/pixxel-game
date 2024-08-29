'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { type SearchQueryStore, createSearchQueryStore } from '../model';

export type SearchQueryStoreApi = ReturnType<typeof createSearchQueryStore>;

export const SearchQueryStoreContext = createContext<
  SearchQueryStoreApi | undefined
>(undefined);

export interface SearchQueryStoreProviderProps {
  children: ReactNode;
}

export const SearchQueryStoreProvider = ({
  children,
}: SearchQueryStoreProviderProps) => {
  const storeRef = useRef<SearchQueryStoreApi | null>(null);

  if (!storeRef.current) {
    storeRef.current = createSearchQueryStore();
  }

  return (
    <SearchQueryStoreContext.Provider value={storeRef.current}>
      {children}
    </SearchQueryStoreContext.Provider>
  );
};

export const useSearchQueryStore = <T,>(
  selector: (store: SearchQueryStore) => T
): T => {
  const searchQueryStoreContext = useContext(SearchQueryStoreContext);

  if (!searchQueryStoreContext) {
    throw new Error(
      'useSearchQueryStore must be used within a SearchQueryStoreProvider'
    );
  }

  return useStore(searchQueryStoreContext, selector);
};
