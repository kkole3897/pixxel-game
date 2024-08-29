'use client';

import { PrevPageStoreProvider } from '@/features/restore-prev-page';
import { SearchQueryStoreProvider } from '@/features/search-game';

type StoreProvidersProps = {
  children: React.ReactNode;
};

export default function StoreProviders({ children }: StoreProvidersProps) {
  return (
    <PrevPageStoreProvider>
      <SearchQueryStoreProvider>{children}</SearchQueryStoreProvider>
    </PrevPageStoreProvider>
  );
}
