import { createStore } from 'zustand/vanilla';

import { type RequestedGameStoreIdentifier } from './requested-game-store-identifier';
import { UnsupportedStoreUrlError } from './errors';

export type GeneratedStoreIdentifierState = {
  storeIdentifier: RequestedGameStoreIdentifier | null;
  error: UnsupportedStoreUrlError | null;
};

export type GeneratedStoreIdentifierActions = {
  setStoreIdentifier: (payload: RequestedGameStoreIdentifier) => void;
  setError: (error: UnsupportedStoreUrlError | null) => void;
};

export type GeneratedStoreIdentifierStore = GeneratedStoreIdentifierState &
  GeneratedStoreIdentifierActions;

export const defaultInitState: GeneratedStoreIdentifierState = {
  storeIdentifier: null,
  error: null,
};

export const createGeneratedStoreIdentifierStore = (
  initState: GeneratedStoreIdentifierState = defaultInitState
) => {
  return createStore<GeneratedStoreIdentifierStore>((set) => ({
    ...initState,
    setStoreIdentifier: (
      storeIdentifier: RequestedGameStoreIdentifier | null
    ) => {
      set((state) => ({ ...state, storeIdentifier, error: null }));
    },
    setError: (error: UnsupportedStoreUrlError | null) => {
      set((state) => ({ ...state, error, storeIdentifier: null }));
    },
  }));
};
