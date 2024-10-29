import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type PlayRecordFieldValues } from './use-play-records-field-array';
import {
  createManualLibraryItemDataSchema,
  type CreateManualLibraryItemData,
} from '../model';

type FormValues = {
  title: string;
  mainImage: string | null;
  playRecords: PlayRecordFieldValues[];
  publicId: string;
};

type UseCreateManualLibraryItemFormOptions = {
  defaultValues?: FormValues;
};

export type CreateValidManualLibraryItemFormValues =
  CreateManualLibraryItemData;

export function useCreateManualLibraryItemForm({
  defaultValues,
}: UseCreateManualLibraryItemFormOptions) {
  const { handleSubmit: createHandleSubmit, ...rest } = useForm<
    FormValues,
    unknown,
    CreateManualLibraryItemData
  >({
    defaultValues,
    reValidateMode: 'onChange',
    resolver: zodResolver(createManualLibraryItemDataSchema),
  });

  return {
    ...rest,
    createHandleSubmit,
  };
}
