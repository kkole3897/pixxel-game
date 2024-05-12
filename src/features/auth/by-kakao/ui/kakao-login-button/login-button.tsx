'use client';

import { requestAuthorizationCode } from '../../model/request-authroziation-code';
import { Icon } from '@/shared/ui';
import * as styles from './login-button.css';

export default function LoginButton() {
  const clickHandler = () => {
    requestAuthorizationCode();
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
