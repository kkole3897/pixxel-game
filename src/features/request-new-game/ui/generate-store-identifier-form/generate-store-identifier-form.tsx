'use client';

import { RiArrowRightSLine } from '@remixicon/react';

import { useGenerateStoreIdentifierFormState } from '../../lib';
import { Input } from '@/shared/ui/input';
import { LoadingButton } from '@/shared/ui/loading-button';
import * as styles from './generate-store-identifier-form.css';

export default function GenerateStoreIdentifierForm() {
  const { handleSubmit, handleUrlChange, urlError, urlInputRef, isPending } =
    useGenerateStoreIdentifierFormState();

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.formInner}>
        <div className={styles.searchArea}>
          <div className={styles.field}>
            <Input
              id="url"
              name="url"
              className={styles.urlInput}
              required
              onChange={handleUrlChange}
              isInvalid={!!urlError}
              ref={urlInputRef}
              placeholder="url을 입력해주세요"
            />
          </div>
          <div className={styles.submitArea}>
            <LoadingButton
              type="submit"
              isLoading={isPending}
              className={styles.submitButton}
            >
              <RiArrowRightSLine />
              <span className={styles.submitButtonLabel}>확인하기</span>
            </LoadingButton>
          </div>
        </div>
        {urlError && (
          <div className={styles.errorMessage}>
            지원하지 않는 url 형식을 입력했습니다.
          </div>
        )}
      </div>
    </form>
  );
}
