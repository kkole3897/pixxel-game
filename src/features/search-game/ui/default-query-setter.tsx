'use client';

import { useEffect } from 'react';

import { useDefaultSearchQuery } from '../lib';

export default function DefaultQueryProvider() {
  const { setDefaultQuery } = useDefaultSearchQuery();

  useEffect(() => {
    setDefaultQuery();
  }, [setDefaultQuery]);

  return null;
}
