'use client';

import { useKakaoOidc } from '../../lib';
import { Icon } from '@/src/shared/ui';
import * as styles from './login-button.css';

export default function LoginButton() {
  const { authorize } = useKakaoOidc();

  const clickHandler = () => {
    authorize();
  };

  return (
    <button type="button" className={styles.button} onClick={clickHandler}>
      <div className={styles.iconArea}>
        <Icon.KakaoSpeechBubbleFill size={30} />
      </div>
      <div className={styles.labelArea}>카카오 로그인</div>
    </button>
  );
}
