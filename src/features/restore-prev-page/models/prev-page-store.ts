import { createStore } from 'zustand/vanilla';

export type PrevPageState = {
  pathname: string;
};

export type PrevPageActions = {
  setPathname: (pathname: string) => void;
};

export type PrevPageStore = PrevPageState & PrevPageActions;

export const defaultInitState: PrevPageState = {
  pathname: '/',
};

export const createPrevPageStore = (
  initState: PrevPageState = defaultInitState
) => {
  return createStore<PrevPageStore>((set) => ({
    ...initState,
    setPathname: (pathname: string) => {
      set((state) => ({ ...state, pathname }));
    },
  }));
};
