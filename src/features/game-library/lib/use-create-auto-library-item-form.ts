import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type PlayRecordFieldValues } from './use-play-records-field-array';
import {
  createBaseLibraryItemDataSchema,
  type CreateBaseLibraryItemData,
} from '../model';

const createValidAutoLibraryItemFormValuesSchema =
  createBaseLibraryItemDataSchema;

export type CreateValidAutoLibraryItemFormValues = CreateBaseLibraryItemData;

type FormValues = {
  playRecords: PlayRecordFieldValues[];
};

type UseCreateAutoLibraryItemFormOptions = {
  defaultValues?: FormValues;
};

export function useCreateAutoLibraryItemForm({
  defaultValues,
}: UseCreateAutoLibraryItemFormOptions) {
  const { handleSubmit: createHandleSubmit, ...returns } = useForm<
    FormValues,
    unknown,
    CreateValidAutoLibraryItemFormValues
  >({
    defaultValues,
    reValidateMode: 'onChange',
    resolver: zodResolver(createValidAutoLibraryItemFormValuesSchema),
  });

  return {
    ...returns,
    createHandleSubmit,
  };
}
