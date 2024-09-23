'use client';

import React from 'react';
import { useState } from 'react';

import { UnsupportedStoreUrlError } from '../model';
import {
  useCheckExistedGameQuery,
  useCheckExistedRequestQuery,
} from '../queries';
import { convertUrlToStoreIdentifier } from './convert-url-to-store-identifier';
import { useGeneratedStoreIdentifierStore } from './use-generated-store-identifier-store';

export function useGenerateStoreIdentifierFormState() {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState<UnsupportedStoreUrlError | null>(
    null
  );
  const urlInputRef = React.useRef<HTMLInputElement>(null);

  const { storeIdentifier, setStoreIdentifier } =
    useGeneratedStoreIdentifierStore((state) => state);
  const { isStale: isCheckExistedGameStale, refetch: refetchCheckExistedGame } =
    useCheckExistedGameQuery(storeIdentifier);
  const {
    isStale: isCheckExistedRequestStale,
    refetch: refetchCheckExistedRequest,
  } = useCheckExistedRequestQuery(storeIdentifier);

  const handleSubmit: React.EventHandler<React.FormEvent> = (event) => {
    event.preventDefault();

    try {
      const data = convertUrlToStoreIdentifier(url);
      setUrlError(null);
      setStoreIdentifier(data);

      if (isCheckExistedGameStale) {
        refetchCheckExistedGame();
      }
      if (isCheckExistedRequestStale) {
        refetchCheckExistedRequest();
      }
    } catch (error) {
      setStoreIdentifier(null);

      if (error instanceof UnsupportedStoreUrlError) {
        setUrlError(error);
        urlInputRef.current?.focus();
        return;
      }

      throw error;
    }
  };

  const handleUrlChange: React.EventHandler<
    React.ChangeEvent<HTMLInputElement>
  > = (event) => {
    setUrl(event.target.value);
  };

  return {
    handleSubmit,
    urlError,
    handleUrlChange,
    urlInputRef,
  };
}
