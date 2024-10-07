'use client';

import { useState, useEffect } from 'react';

import { RequestedGameStoreIdentifier } from '../model';

export type FormState = RequestedGameStoreIdentifier & { title: string };

export function useCreateRequestedGameFormState(initialState: FormState) {
  const [formState, setFormState] = useState<FormState>(initialState);

  useEffect(() => {
    setFormState(initialState);
  }, [initialState]);

  const handleSubmit =
    (onSubmit?: (data: FormState) => void) =>
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onSubmit?.(formState);
    };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeStore = (store: RequestedGameStoreIdentifier['store']) => {
    setFormState((prev) => ({
      ...prev,
      store,
    }));
  };

  return {
    formState,
    handleSubmit,
    handleChangeInput,
    handleChangeStore,
  };
}
