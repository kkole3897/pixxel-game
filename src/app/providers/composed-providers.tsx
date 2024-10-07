'use client';

import ReactQueryProvider from './react-query';
import StoreProviders from './store-providers';
import { ToastStoreProvider } from '@/shared/lib/primitives/toast';
import { TopEndToastViewport } from '@/shared/ui/top-end-toast-viewport';
import { TopToastViewport } from '@/shared/ui/top-toast-viewport';

export default function ComposedProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <StoreProviders>
        <ToastStoreProvider>
          {children}
          <TopEndToastViewport />
          <TopToastViewport />
        </ToastStoreProvider>
      </StoreProviders>
    </ReactQueryProvider>
  );
}
