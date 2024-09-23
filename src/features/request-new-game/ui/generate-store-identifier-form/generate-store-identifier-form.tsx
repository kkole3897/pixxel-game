'use client';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import * as styles from './generate-store-identifier-form.css';

type GenerateStoreIdentifierForm = {
  onSubmit?: (data: { url: string }) => void;
};

export default function GenerateStoreIdentifierForm({
  onSubmit,
}: GenerateStoreIdentifierForm) {
  const handleSubmit: React.EventHandler<React.FormEvent> = (event) => {
    event.preventDefault();
  };

  return (
    <form method="POST" autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.formInner}>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="url">
            Url
          </label>
          <Input id="url" name="url" className={styles.urlInput} required />
        </div>
        <div className={styles.submitArea}>
          <Button type="submit">확인하기</Button>
        </div>
      </div>
    </form>
  );
}
