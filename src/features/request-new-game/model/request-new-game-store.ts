import { createStore } from 'zustand/vanilla';

import { RequestNewGameData } from './request-new-game-data';
import { UnsupportedStoreUrlError } from './errors';

export type RequestNewGameState = {
  requestNewGameData: RequestNewGameData | null;
  error: UnsupportedStoreUrlError | null;
};

export type RequestNewGameActions = {
  setRequestNewGameData: (payload: RequestNewGameData) => void;
  setError: (error: UnsupportedStoreUrlError | null) => void;
};

export type RequestNewGameStore = RequestNewGameState & RequestNewGameActions;

export const defaultInitState: RequestNewGameState = {
  requestNewGameData: null,
  error: null,
};

export const createRequestNewGameStore = (
  initState: RequestNewGameState = defaultInitState
) => {
  return createStore<RequestNewGameStore>((set) => ({
    ...initState,
    setRequestNewGameData: (requestNewGameData: RequestNewGameData) => {
      set((state) => ({ ...state, requestNewGameData, error: null }));
    },
    setError: (error: UnsupportedStoreUrlError | null) => {
      set((state) => ({ ...state, error }));
    },
  }));
};
