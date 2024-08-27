'use client';

import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { RiSearchLine } from '@remixicon/react';

import * as Input from '@/shared/ui/input';
import { useSearchForm, type SearchFormData } from '../../lib';
import * as styles from './search-form.css';

type SearchFormProps = Pick<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'className'
> & { defaultKeyword?: string; onSubmit: (formData: SearchFormData) => void };

export default function SearchForm({
  onSubmit,
  defaultKeyword,
}: SearchFormProps) {
  const { keyword, setKeyword, handleSumit } = useSearchForm({
    keyword: defaultKeyword,
  });

  return (
    <form onSubmit={(event) => handleSumit(event, onSubmit)}>
      <Input.Root
        type="text"
        name="keyword"
        className={styles.input}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      >
        <Input.Slot>
          <RiSearchLine color="#80838a" />
        </Input.Slot>
      </Input.Root>
    </form>
  );
}
