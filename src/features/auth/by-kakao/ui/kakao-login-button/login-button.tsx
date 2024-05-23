'use client';

import { loginByKakao } from '../../model/login-by-kakao';
import { KakaoSpeechBubbleFill } from '@/shared/ui/icons';
import * as styles from './login-button.css';

export default function LoginButton() {
  const clickHandler = async () => {
    await loginByKakao();
  };

  return (
    <button type="button" className={styles.button} onClick={clickHandler}>
      <div className={styles.iconArea}>
        <KakaoSpeechBubbleFill size={30} />
      </div>
      <div className={styles.labelArea}>카카오 로그인</div>
    </button>
  );
}
