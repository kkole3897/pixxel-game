'use client';

import { useGenerateStoreIdentifierFormState } from '../../lib';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import * as styles from './generate-store-identifier-form.css';

export default function GenerateStoreIdentifierForm() {
  const { handleSubmit, handleUrlChange, urlError, urlInputRef } =
    useGenerateStoreIdentifierFormState();

  return (
    <form method="POST" autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.formInner}>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="url">
            Url
          </label>
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
          {urlError && (
            <div className={styles.errorMessage}>
              지원하지 않는 url 형식을 입력했습니다.
            </div>
          )}
        </div>
        <div className={styles.submitArea}>
          <Button type="submit">확인하기</Button>
        </div>
      </div>
    </form>
  );
}
