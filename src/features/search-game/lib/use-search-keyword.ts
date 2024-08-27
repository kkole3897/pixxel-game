'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';

export function useSearchKeyword(defaultKeyword: string = '') {
  const router = useRouter();

  const [keyword, setKeyword] = useState(defaultKeyword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({
      pathname: '/search',
      query: { query: keyword },
    });
  };

  return {
    keyword,
    setKeyword,
    handleSubmit,
  };
}
