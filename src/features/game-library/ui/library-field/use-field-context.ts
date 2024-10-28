'use client';

import { createContext, useContext } from 'react';

type FieldContextValue = {
  id: string;
};

const FieldContext = createContext<FieldContextValue | undefined>(undefined);

export const FieldProvider = FieldContext.Provider;

export function useFieldContext() {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error('useFieldContext must be used within a FieldProvider');
  }

  return context;
}
