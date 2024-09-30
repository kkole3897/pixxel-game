'use client';

import ReactQueryProvider from './react-query';
import StoreProviders from './store-providers';

export default function ComposedProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <StoreProviders>{children}</StoreProviders>
    </ReactQueryProvider>
  );
}
