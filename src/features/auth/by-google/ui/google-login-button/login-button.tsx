'use client';

import { loginByGoogle } from '../../model';
import { GoogleFillBase } from '@/shared/ui/icons';
import * as styles from './login-button.css';

export default function LoginButton() {
  const clickHandler = async () => {
    await loginByGoogle();
  };

  return (
    <button type="button" className={styles.button} onClick={clickHandler}>
      <div className={styles.iconArea}>
        <GoogleFillBase size={20} />
      </div>
      <div className={styles.labelArea}>구글 로그인</div>
    </button>
  );
}
