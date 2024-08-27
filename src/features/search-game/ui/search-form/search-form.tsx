'use client';

import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { RiSearchLine } from '@remixicon/react';
import { useState } from 'react';

import * as Input from '@/shared/ui/input';
import * as styles from './search-form.css';

type SearchFormProps = Pick<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit' | 'className'
> & { defaultKeyword?: string };

export default function SearchForm({
  onSubmit,
  defaultKeyword,
}: SearchFormProps) {
  const [keyword, setKeyword] = useState(defaultKeyword);

  return (
    <form onSubmit={onSubmit}>
      <Input.Root
        type="text"
        name="keyword"
        className={styles.input}
        value={keyword}
      >
        <Input.Slot>
          <RiSearchLine color="#80838a" />
        </Input.Slot>
      </Input.Root>
    </form>
  );
}
