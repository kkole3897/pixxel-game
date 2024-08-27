'use client';

import { useState } from 'react';

import { type SearchFormData, useSearchRouter } from '@/features/search-game';

export function useSearchGameModal() {
  const { searchGame } = useSearchRouter();

  const [isOpened, setIsOpened] = useState(false);

  function handleSumit(searchFormData: SearchFormData) {
    searchGame(searchFormData);
    setIsOpened(false);
  }

  return {
    isOpened,
    setIsOpened,
    handleSumit,
  };
}
