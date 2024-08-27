'use client';

import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { RiSearchLine, RiCloseCircleFill } from '@remixicon/react';

import * as Input from '@/shared/ui/input';
import { useSearchForm, type SearchFormData } from '../../lib';
import * as styles from './search-form.css';

type SearchFormProps = {
  autoFocus?: boolean;
  defaultKeyword?: string;
  onSubmit?: (formData: SearchFormData) => void;
};

export default function SearchForm({
  onSubmit,
  defaultKeyword,
  autoFocus,
  ...props
}: SearchFormProps) {
  const { keyword, setKeyword, handleSumit, clearKeyword } = useSearchForm({
    keyword: defaultKeyword,
  });

  return (
    <form
      onSubmit={(event) => handleSumit(event, onSubmit)}
      autoComplete="off"
      {...props}
    >
      <Input.Root
        type="text"
        name="keyword"
        className={styles.keywordInput}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="타이틀을 입력해주세요"
        autoFocus={autoFocus}
      >
        <Input.Slot side="left">
          <RiSearchLine color="#80838a" />
        </Input.Slot>
        {keyword.length > 0 && (
          <Input.Slot side="right">
            <button
              type="button"
              onClick={() => clearKeyword()}
              className={styles.clearKeywordButton}
            >
              <RiCloseCircleFill color="#80838a" />
            </button>
          </Input.Slot>
        )}
      </Input.Root>
    </form>
  );
}
