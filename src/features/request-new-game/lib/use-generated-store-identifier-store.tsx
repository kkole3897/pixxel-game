'use client';

import { createContext, useRef, useContext, type ReactNode } from 'react';
import { useStore } from 'zustand';

import {
  createGeneratedStoreIdentifierStore,
  type GeneratedStoreIdentifierStore,
} from '../model';

export type GeneratedStoreIdentifierStoreApi = ReturnType<
  typeof createGeneratedStoreIdentifierStore
>;

export const GeneratedStoreIdentifierStoreContext = createContext<
  GeneratedStoreIdentifierStoreApi | undefined
>(undefined);

export interface GeneratedStoreIdentifierStoreProviderProps {
  children: ReactNode;
}

export const GeneratedStoreIdentifierStoreProvider = ({
  children,
}: GeneratedStoreIdentifierStoreProviderProps) => {
  const storeRef = useRef(createGeneratedStoreIdentifierStore());
  if (!storeRef.current) {
    storeRef.current = createGeneratedStoreIdentifierStore();
  }

  return (
    <GeneratedStoreIdentifierStoreContext.Provider value={storeRef.current}>
      {children}
    </GeneratedStoreIdentifierStoreContext.Provider>
  );
};

export const useGeneratedStoreIdentifierStore = <T,>(
  selector: (store: GeneratedStoreIdentifierStore) => T
): T => {
  const generatedStoreIdentifierContext = useContext(
    GeneratedStoreIdentifierStoreContext
  );

  if (!generatedStoreIdentifierContext) {
    throw new Error(
      'useGeneratedStoreIdentifierStore must be used within a GeneratedStoreIdentifierStoreProvider'
    );
  }

  return useStore(generatedStoreIdentifierContext, selector);
};
