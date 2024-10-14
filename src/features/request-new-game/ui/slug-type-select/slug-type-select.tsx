'use client';

import { useEffect, useState, useRef } from 'react';

import { createSlugTypeSelectOptions } from '../../lib';
import { type GameStore, type SteamSlugType, type EpicSlugType } from '@/entities/game';
import { Select } from '@/shared/ui/select';

export type SlugTypeSelectProps = {
  store: GameStore;
  defaultValue?: SteamSlugType | EpicSlugType;
  name?: string;
  required?: boolean;
}

export default function SlugTypeSelect({ store, defaultValue, ...props }: SlugTypeSelectProps) {
  const prevStore = useRef(store);
  const options = createSlugTypeSelectOptions(store);

  const [value, setValue] = useState<SteamSlugType | EpicSlugType>(defaultValue ?? options[0].value);
  const isValid = options.some((option) => option.value === value);

  const handleValueChange = (value: SteamSlugType | EpicSlugType) => {
    setValue(value);
  }

  useEffect(() => {
    if (store === 'steam' && prevStore.current !== store) {
      setValue('app')
      prevStore.current = store;
    } else if (store === 'epic' && prevStore.current !== store) {
      setValue('p');
      prevStore.current = store;
    }
  }, [store]);

  return (
    <Select.Root {...props} value={value} onValueChange={handleValueChange}>
      <Select.Trigger aria-invalid={!isValid}>
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>
      <Select.Content sideOffset={8}>
        {options.map((option) => (
          <Select.Item key={option.value} value={option.value}>
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
