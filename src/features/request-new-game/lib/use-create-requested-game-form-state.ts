'use client';

import { useState, useEffect } from 'react';

import {
  type RequestedGameStoreIdentifier,
  type CreateRequestedGameData,
} from '../model';
import {
  type GameStore,
  isSteamSlugType,
  isEpicSlugType,
} from '@/entities/game';

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

interface BaseFormState {
  store: GameStore;
  slug: string;
  title: string;
}
interface SteamFormState extends BaseFormState {
  store: 'steam';
  slugType: 'app' | 'bundle' | 'sub';
}

interface EpicFormState extends BaseFormState {
  store: 'epic';
  slugType: 'p' | 'bundles';
}

export type FormState = SteamFormState | EpicFormState;

function isSteamFormState(state: FormState): state is SteamFormState {
  return state.store === 'steam';
}

function isEpicFormState(state: FormState): state is EpicFormState {
  return state.store === 'epic';
}

function storeIdentifierToFormState(
  storeIdentifier: RequestedGameStoreIdentifier
): FormState {
  if (storeIdentifier.store === 'steam') {
    const [slugType, slug] = storeIdentifier.slug.split('/');

    return {
      store: 'steam',
      slugType: slugType,
      slug: slug,
      title: '',
    } as SteamFormState;
  } else {
    const [slugType, slug] = storeIdentifier.slug.split('/');

    return {
      store: 'epic',
      slugType,
      slug,
      title: '',
    } as EpicFormState;
  }
}

function formStateToStoreUrl(formState: FormState): string {
  const slug = `${formState.slugType}/${formState.slug}`;
  if (formState.store === 'steam') {
    return `https://store.steampowered.com/${slug}`;
  } else {
    return `https://store.epicgames.com/${slug}`;
  }
}

function formStateToStoreIdentifier(
  formState: FormState
): RequestedGameStoreIdentifier {
  return {
    store: formState.store,
    slug: `${formState.slugType}/${formState.slug}`,
  };
}

export function useCreateRequestedGameFormState(
  storeIdentifier: RequestedGameStoreIdentifier
) {
  const [formState, setFormState] = useState<FormState>(
    storeIdentifierToFormState(storeIdentifier)
  );
  const [errors, setErrors] = useState<{
    slug: string | null;
  }>({ slug: null });
  const errorCatagory = {
    slug: {
      requiredError: 'requiredError',
      steamFormatError: 'steamFormatError',
    },
  };
  const validators = {
    slug: (formState: FormState) => {
      if (formState.slug.length === 0) {
        return errorCatagory.slug.requiredError;
      } else if (
        formState.store === 'steam' &&
        !/^(\d+)$/.test(formState.slug)
      ) {
        return errorCatagory.slug.steamFormatError;
      }

      return null;
    },
  } as const;

  useEffect(() => {
    setFormState(storeIdentifierToFormState(storeIdentifier));
  }, [storeIdentifier]);

  const handleSubmit =
    (onSubmit?: (data: CreateRequestedGameData) => void) =>
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const currentErrors = (
        Object.entries(validators) as Entries<typeof validators>
      ).reduce<{ slug: null | string }>(
        (acc, [key, validator]) => {
          const error = validator(formState);

          if (error) {
            acc[key] = error;
          }

          return acc;
        },
        {
          slug: null,
        }
      );

      if (Object.values(currentErrors).some((error) => error !== null)) {
        setErrors(currentErrors);
        return;
      } else {
        setErrors({
          slug: null,
        });
      }

      const data = {
        ...formStateToStoreIdentifier(formState),
        title: formState.title,
      };

      onSubmit?.(data);
    };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      return {
        ...prev,
        [name]: null,
      };
    });
  };

  const handleSelectStore = (store: FormState['store']) => {
    if (store === 'steam') {
      setFormState({
        store,
        slugType: 'app',
        slug: '',
        title: '',
      });
    } else {
      setFormState({
        store,
        slugType: 'p',
        slug: '',
        title: '',
      });
    }
  };

  const handleSelectSlugType = (slugType: FormState['slugType']) => {
    if (isSteamSlugType(slugType) && isSteamFormState(formState)) {
      setFormState({
        ...formState,
        slugType,
      });
    } else if (isEpicSlugType(slugType) && isEpicFormState(formState)) {
      setFormState({
        ...formState,
        slugType,
      });
    }
  };

  const storeUrl = formStateToStoreUrl(formState);

  return {
    formState,
    handleSubmit,
    handleChangeInput,
    handleSelectStore,
    handleSelectSlugType,
    storeUrl,
    errors,
    errorCatagory,
  };
}
