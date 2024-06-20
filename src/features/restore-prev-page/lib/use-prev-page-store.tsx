'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { type PrevPageStore, createPrevPageStore } from '../models';

export type PrevPageStoreApi = ReturnType<typeof createPrevPageStore>;

export const PrevPageStoreContext = createContext<PrevPageStoreApi | undefined>(
  undefined
);

export interface PrevPageStoreProviderProps {
  children: ReactNode;
}

export const PrevPageStoreProvider = ({
  children,
}: PrevPageStoreProviderProps) => {
  const storeRef = useRef(createPrevPageStore());
  if (!storeRef.current) {
    storeRef.current = createPrevPageStore();
  }

  return (
    <PrevPageStoreContext.Provider value={storeRef.current}>
      {children}
    </PrevPageStoreContext.Provider>
  );
};

export const usePrevPageStore = <T,>(
  selector: (store: PrevPageStore) => T
): T => {
  const prevPageStoreContext = useContext(PrevPageStoreContext);

  if (!prevPageStoreContext) {
    throw new Error(
      'usePrevPageStore must be used within a PrevPageStoreProvider'
    );
  }

  return useStore(prevPageStoreContext, selector);
};
