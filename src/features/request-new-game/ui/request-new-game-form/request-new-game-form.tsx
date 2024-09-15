'use client';

import { convertGameStoreToName } from '../../lib';
import { GAME_STORE } from '@/entities/game';
import { Input } from '@/shared/ui/input';
import { RadioGroup } from '@/shared/ui/radio-group';
import * as styles from './request-new-game-form.css';

export default function RequestNewGameForm() {
  return (
    <form>
      <div className={styles.formInner}>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor={GAME_STORE.Steam}>
            스토어
          </label>
          <RadioGroup.Root className={styles.radioGroup} required name="store">
            {Object.values(GAME_STORE).map((store) => {
              return (
                <label key={store} className={styles.radioLabel}>
                  <RadioGroup.Item value={store} id={store}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  {convertGameStoreToName(store)}
                </label>
              );
            })}
          </RadioGroup.Root>
        </div>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="url">
            Url
          </label>
          <Input id="url" className={styles.urlInput} required />
        </div>
      </div>
    </form>
  );
}
