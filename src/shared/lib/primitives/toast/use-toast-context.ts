import { createContext, useContext } from 'react';

import type { ToastData } from './types';

export type UseToastContext = ToastData;

export const ToastContext = createContext<UseToastContext | undefined>(
  undefined
);

export const ToastProvider = ToastContext.Provider;

export function useToastContext() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }

  return context;
}
