'use client';

import { useState } from 'react';
import { nanoid } from 'nanoid';

type UseAdditionalInfoFieldArrayOptions<T = any> = {
  defaultValue?: T[];
};

export function useAdditionalInfoFieldArray<T = any>({
  defaultValue = [],
}: UseAdditionalInfoFieldArrayOptions<T> = {}) {
  const namePrefix = 'additionalInfo';
  function generateNewField(data: T): T & { id: string } {
    return {
      ...data,
      id: nanoid(),
    };
  }

  const [fields, setFields] = useState(defaultValue.map(generateNewField));

  const generateName = (index: number, key: string) => {
    return `${namePrefix}.${index}.${key}`;
  };

  const append = (data: T) => {
    setFields((prev) => [...prev, generateNewField(data)]);
  };

  const remove = (index?: number) => {
    if (index === undefined) {
      setFields([]);
      return;
    }

    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  const update = (index: number, data: Partial<T>) => {
    setFields((prev) =>
      prev.map((field, i) => (i === index ? { ...field, ...data } : field))
    );
  };

  return {
    generateName,
    fields,
    append,
    remove,
    update,
  };
}
