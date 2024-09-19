'use client';

import { createContext, useRef, useContext, type ReactNode } from 'react';
import { useStore } from 'zustand';

import { createRequestNewGameStore, type RequestNewGameStore } from '../model';

export type RequestNewGameStoreApi = ReturnType<
  typeof createRequestNewGameStore
>;

export const RequestNewGameStoreContext = createContext<
  RequestNewGameStoreApi | undefined
>(undefined);

export interface RequestNewGameStoreProviderProps {
  children: ReactNode;
}

export const RequestNewGameStoreProvider = ({
  children,
}: RequestNewGameStoreProviderProps) => {
  const storeRef = useRef(createRequestNewGameStore());
  if (!storeRef.current) {
    storeRef.current = createRequestNewGameStore();
  }

  return (
    <RequestNewGameStoreContext.Provider value={storeRef.current}>
      {children}
    </RequestNewGameStoreContext.Provider>
  );
};

export const useRequestNewGameStore = <T,>(
  selector: (store: RequestNewGameStore) => T
): T => {
  const requestNewGameStoreContext = useContext(RequestNewGameStoreContext);

  if (!requestNewGameStoreContext) {
    throw new Error(
      'useRequestNewGameStore must be used within a RequestNewGameStoreProvider'
    );
  }

  return useStore(requestNewGameStoreContext, selector);
};
