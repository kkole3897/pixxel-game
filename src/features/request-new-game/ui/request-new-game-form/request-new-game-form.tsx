'use client';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import * as styles from './request-new-game-form.css';

type RequestNewGameFormProps = {
  onSubmit?: (data: { url: string }) => void;
};

export default function RequestNewGameForm({
  onSubmit,
}: RequestNewGameFormProps) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (onSubmit) {
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries()) as { url: string };
      onSubmit(data);
    }
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
