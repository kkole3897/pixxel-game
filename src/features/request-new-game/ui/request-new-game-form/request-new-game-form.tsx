'use client';

import { Input } from '@/shared/ui/input';
import * as styles from './request-new-game-form.css';

export default function RequestNewGameForm() {
  return (
    <form>
      <div className={styles.formInner}>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="url">
            Url
          </label>
          <Input id="url" name="url" className={styles.urlInput} required />
        </div>
      </div>
    </form>
  );
}
