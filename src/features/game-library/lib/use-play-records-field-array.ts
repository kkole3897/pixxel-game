'use client';

import { useFieldArray, type Control, type ArrayPath } from 'react-hook-form';
import z from 'zod';

import {
  libraryDrmSchema,
  customLibraryDrmSchema,
  basePlayRecordSchema,
} from '../model';
import { gameDrmSchema } from '@/entities/game';

const libraryDrmFieldValuesSchema = libraryDrmSchema.extend({
  drm: gameDrmSchema.nullable(),
});

export const playRecordFieldValuesSchema = z
  .discriminatedUnion('isCustomDrm', [
    libraryDrmFieldValuesSchema,
    customLibraryDrmSchema,
  ])
  .and(
    basePlayRecordSchema.omit({
      id: true,
      libraryId: true,
    })
  );

export type PlayRecordFieldValues = z.infer<typeof playRecordFieldValuesSchema>;

type BaseFormValues = {
  playRecords: PlayRecordFieldValues[];
};

export function usePlayRecordsFieldArray<T extends BaseFormValues>({
  control,
}: {
  control: Control<T>;
}) {
  return useFieldArray<T>({
    control,
    name: 'playRecords' as ArrayPath<T>,
  });
}
