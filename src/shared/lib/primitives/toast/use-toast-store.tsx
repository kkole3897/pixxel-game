'use client';

import {
  type ReactNode,
  createContext,
  useRef,
  useContext,
  useLayoutEffect,
} from 'react';
import { useStore } from 'zustand';

import { type ToastStore, createToastStore } from './toast-store';

export type ToastStoreApi = ReturnType<typeof createToastStore>;

export const ToastStoreContext = createContext<ToastStoreApi | undefined>(
  undefined
);

export interface ToastStoreProviderProps {
  children: ReactNode;
}

export const ToastStoreProvider = ({ children }: ToastStoreProviderProps) => {
  const storeRef = useRef(createToastStore());
  if (!storeRef.current) {
    storeRef.current = createToastStore();
  }

  return (
    <ToastStoreContext.Provider value={storeRef.current}>
      {children}
      <TrackDocumentVisibility />
    </ToastStoreContext.Provider>
  );
};

export const useToastStore = <T,>(selector: (store: ToastStore) => T): T => {
  const toastStoreContext = useContext(ToastStoreContext);

  if (!toastStoreContext) {
    throw new Error('useToastStore must be used within a ToastStoreProvider');
  }

  return useStore(toastStoreContext, selector);
};

function TrackDocumentVisibility() {
  const [toasts, pauseToast, resumeToast] = useToastStore((store) => [
    store.toasts,
    store.pauseToast,
    store.resumeToast,
  ]);

  useLayoutEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        toasts.forEach((toast) => {
          if (!toast.pauseOnPageIdle) {
            return;
          }

          pauseToast(toast.id);
        });
      } else {
        toasts.forEach((toast) => {
          if (!toast.pauseOnPageIdle) {
            return;
          }

          resumeToast(toast.id);
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  });

  return null;
}
