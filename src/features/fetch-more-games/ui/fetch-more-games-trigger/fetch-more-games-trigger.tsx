'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import { useGamesInfiniteQuery } from '@/entities/game';

export default function FetchMoreGamesTrigger() {
  const { hasNextPage, isFetching, fetchNextPage } = useGamesInfiniteQuery();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!hasNextPage || isFetching) {
      return;
    }

    if (inView) {
      fetchNextPage();
    }
  }, [inView, isFetching, fetchNextPage, hasNextPage]);

  if (isFetching || !hasNextPage) {
    return null;
  }

  return <div ref={ref}></div>;
}
