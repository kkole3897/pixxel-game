'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import z from 'zod';

import {
  libraryDrmSchema,
  customLibraryDrmSchema,
  basePlayRecordSchema,
} from '../model';
import { gameDrmSchema } from '@/entities/game';

const libraryDrmFormValuesSchema = libraryDrmSchema.extend({
  drm: gameDrmSchema.nullable(),
});

const playRecordFormValuesSchema = z
  .discriminatedUnion('isCustomDrm', [
    libraryDrmFormValuesSchema,
    customLibraryDrmSchema,
  ])
  .and(
    basePlayRecordSchema.omit({
      id: true,
      libraryId: true,
    })
  );

type PlayRecordFormValues = z.infer<typeof playRecordFormValuesSchema>;

type FormValues = {
  playRecords: PlayRecordFormValues[];
};

type usePlayRecordsFieldArrayOptions = {
  defaultValues?: FormValues;
};

export function usePlayRecordsFieldArray({
  defaultValues,
}: usePlayRecordsFieldArrayOptions) {
  const {
    control,
    register,
    handleSubmit: createHandleSubmit,
    watch,
    setValue,
  } = useForm<FormValues>({
    defaultValues,
  });
  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: 'playRecords',
  });

  return {
    fields,
    append,
    remove,
    register,
    createHandleSubmit,
    control,
    watch,
    setValue,
  };
}
