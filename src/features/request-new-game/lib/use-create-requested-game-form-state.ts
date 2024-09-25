'use client';

import { useState, useMemo } from 'react';

import { useGeneratedStoreIdentifierStore } from './use-generated-store-identifier-store';
import {
  useCheckExistedGameQuery,
  useCheckExistedRequestQuery,
} from '../queries';

export function useCreateRequestedGameFormState() {
  const storeIdentifier = useGeneratedStoreIdentifierStore(
    (state) => state.storeIdentifier
  );
  const { data: existedGameData, isSuccess: isCheckExistedGameSuccess } =
    useCheckExistedGameQuery(storeIdentifier);
  const { data: existedRequestData, isSuccess: isCheckExistedRequestSuccess } =
    useCheckExistedRequestQuery(storeIdentifier);

  const [formState, setFormState] = useState({
    title: '',
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (storeIdentifier === null) {
      throw new Error('storeIdentifier is required');
    }

    const formData = {
      ...formState,
      ...storeIdentifier,
    };

    console.log(formData);
  };

  const isFormRequired = useMemo(() => {
    if (
      !storeIdentifier ||
      existedGameData ||
      existedRequestData ||
      !isCheckExistedGameSuccess ||
      !isCheckExistedRequestSuccess
    ) {
      return false;
    }

    return true;
  }, [
    storeIdentifier,
    existedGameData,
    existedRequestData,
    isCheckExistedGameSuccess,
    isCheckExistedRequestSuccess,
  ]);

  return {
    formState,
    handleChangeInput,
    handleSubmit,
    isFormRequired,
    storeIdentifier,
  };
}
