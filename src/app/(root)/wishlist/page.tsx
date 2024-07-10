import { Metadata } from 'next';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';

import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/server';
import { wishListQueryKeys } from '@/entities/wish-list';
import { WishListFetcher } from '@/widgets/wishlist/wish-list-fetcher';

export const metadata: Metadata = {
  title: '찜 - Pixxel Game',
  openGraph: {
    title: '찜 - Pixxel Game',
  },
  twitter: {
    title: '찜 - Pixxel Game',
  },
};

export default async function WishListPage() {
  const core = new Core(createClient());
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: wishListQueryKeys.getWishList.queryKey,
    queryFn: () => core.wishlist.getWishlist(),
  });

  return (
    <HydrationBoundary>
      <WishListFetcher />
    </HydrationBoundary>
  );
}
