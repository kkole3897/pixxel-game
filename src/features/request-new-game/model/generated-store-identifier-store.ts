import { createStore } from 'zustand/vanilla';

import { type RequestedGameStoreIdentifier } from './requested-game-store-identifier';
import { UnsupportedStoreUrlError } from './errors';

export type GeneratedStoreIdentifierState = {
  storeIdentifier: RequestedGameStoreIdentifier | null;
};

export type GeneratedStoreIdentifierActions = {
  setStoreIdentifier: (payload: RequestedGameStoreIdentifier | null) => void;
};

export type GeneratedStoreIdentifierStore = GeneratedStoreIdentifierState &
  GeneratedStoreIdentifierActions;

export const defaultInitState: GeneratedStoreIdentifierState = {
  storeIdentifier: null,
};

export const createGeneratedStoreIdentifierStore = (
  initState: GeneratedStoreIdentifierState = defaultInitState
) => {
  return createStore<GeneratedStoreIdentifierStore>((set) => ({
    ...initState,
    setStoreIdentifier: (storeIdentifier) => {
      set((state) => ({ ...state, storeIdentifier }));
    },
  }));
};
