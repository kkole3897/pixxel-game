'use client';

import React from 'react';
import { useState } from 'react';

import { UnsupportedStoreUrlError } from '../model';
import {
  useCheckExistedGameMutation,
  useCheckExistedRequestMutation,
} from '../queries';
import { convertUrlToStoreIdentifier } from './convert-url-to-store-identifier';
import { useGeneratedStoreIdentifierStore } from './use-generated-store-identifier-store';

export const SUCCESS_TYPE = {
  existedGame: 0,
  existedRequest: 1,
  requestAvailable: 2,
};

type SuccessType = (typeof SUCCESS_TYPE)[keyof typeof SUCCESS_TYPE];

export type UseGenerateStoreIdentifierFormStateOptions = {
  onSuccess?: (successType: SuccessType) => void;
};

export function useGenerateStoreIdentifierFormState({
  onSuccess,
}: UseGenerateStoreIdentifierFormStateOptions = {}) {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState<UnsupportedStoreUrlError | null>(
    null
  );
  const urlInputRef = React.useRef<HTMLInputElement>(null);

  const { setStoreIdentifier } = useGeneratedStoreIdentifierStore(
    (state) => state
  );
  const {
    mutateAsync: mutateCheckExistedGameAsync,
    isPending: isCheckExistedGamePending,
  } = useCheckExistedGameMutation();
  const {
    mutateAsync: mutateCheckExistedRequestAsync,
    isPending: isCheckExistedRequestPending,
  } = useCheckExistedRequestMutation();

  const isPending = isCheckExistedGamePending || isCheckExistedRequestPending;

  const handleSubmit: React.EventHandler<React.FormEvent> = async (event) => {
    event.preventDefault();

    try {
      const data = convertUrlToStoreIdentifier(url);
      setUrlError(null);

      const existedGame = await mutateCheckExistedGameAsync(data);

      if (existedGame) {
        onSuccess?.(SUCCESS_TYPE.existedGame);
      } else {
        const existedRequest = await mutateCheckExistedRequestAsync(data);

        if (existedRequest) {
          onSuccess?.(SUCCESS_TYPE.existedRequest);
        } else {
          onSuccess?.(SUCCESS_TYPE.requestAvailable);
        }
      }

      setStoreIdentifier(data);
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
    isPending,
  };
}
