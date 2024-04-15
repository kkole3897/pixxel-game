'use client';

import { useEffect, useMemo } from 'react';

import { useFetchWishListGamesQuery } from '../queries';
import { useWishListStore } from '../model';

export function useWishListGames() {
  const wishList = useWishListStore((state) => state.wishList);

  useEffect(() => {
    useWishListStore.persist.rehydrate();
  }, []);

  const { isPending, data, isError } = useFetchWishListGamesQuery(
    Object.keys(wishList)
  );

  const games = useMemo(() => {
    const { games = [] } = data ?? {};

    const sortedGames = games.sort((a, b) => {
      const priorityA = wishList[a.id].priority;
      const priorityB = wishList[b.id].priority;

      return priorityA - priorityB;
    });

    return sortedGames;
  }, [data, wishList]);

  return {
    games,
    isPending,
    isError,
  };
}
