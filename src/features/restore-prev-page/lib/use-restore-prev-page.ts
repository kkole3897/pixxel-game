'use client';

import { useRouter } from 'next/navigation';

import { usePrevPageStore } from './use-prev-page-store';

export function useRestorePrevPage() {
  const router = useRouter();

  const pathname = usePrevPageStore((state) => state.pathname);
  const pushPrevPage = () => {
    router.push(pathname);
  };
  const replacePrevPage = () => {
    router.replace(pathname);
  };

  return {
    pathname,
    pushPrevPage,
    replacePrevPage,
  };
}
