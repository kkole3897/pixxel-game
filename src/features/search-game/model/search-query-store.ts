import { createStore } from 'zustand/vanilla';

export type SearchQueryState = {
  query: string;
};

export type SearchQueryAction = {
  setQuery: (query: string) => void;
};

export type SearchQueryStore = SearchQueryState & SearchQueryAction;

export const defaultInitState: SearchQueryState = {
  query: '',
};

export const createSearchQueryStore = (
  initState: SearchQueryState = defaultInitState
) => {
  return createStore<SearchQueryStore>((set) => ({
    query: initState.query,
    setQuery: (query: string) => set({ query }),
  }));
};
