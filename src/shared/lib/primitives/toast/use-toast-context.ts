import { createContext, useContext } from 'react';

import type { ToastContext as ToastContextValue } from './types';

export type UseToastContext = ToastContextValue;

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
