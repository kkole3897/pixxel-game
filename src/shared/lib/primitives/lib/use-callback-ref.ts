'use client';

import { useRef, useEffect, useMemo } from 'react';

export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  const memoizedCallback = useMemo(() => {
    return ((...args) => {
      return callbackRef.current?.(...args);
    }) as T;
  }, []);

  return memoizedCallback;
}
