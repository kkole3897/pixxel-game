import { useState } from 'react';

export type SearchFormData = {
  keyword: string;
};

export function useSearchForm(defaultFormData: Partial<SearchFormData>) {
  const [keyword, setKeyword] = useState(defaultFormData.keyword ?? '');

  const clearKeyword = () => setKeyword('');

  const handleSumit = (
    event: React.FormEvent<HTMLFormElement>,
    onSubmit?: (formData: SearchFormData) => void
  ) => {
    event.preventDefault();
    onSubmit?.({ keyword });
  };

  return {
    keyword,
    setKeyword,
    handleSumit,
    clearKeyword,
  };
}
