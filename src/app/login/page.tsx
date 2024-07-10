import { Metadata } from 'next';

import { GoogleLoginButton } from '@/features/auth/by-google';
import * as styles from './page.css';

export const metadata: Metadata = {
  title: '로그인 - Pixxel Game',
  openGraph: {
    title: '로그인 - Pixxel Game',
  },
  twitter: {
    title: '로그인 - Pixxel Game',
  },
};

export default function LoginPage() {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.logoArea}>Pixxel Game</div>
      <div className={styles.description}>
        소셜 로그인으로 간편하게 시작하세요
      </div>
      <div className={styles.socialLoginArea}>
        <GoogleLoginButton />
      </div>
      <div className={styles.terms}>
        로그인 시{' '}
        <strong className={styles.termsStrongText}>서비스 이용약관</strong>과{' '}
        <strong className={styles.termsStrongText}>
          개인정보 수집 및 이용
        </strong>
        에 동의하게 되며,
        <br />
        서비스 이용을 위해 이메일, 이름, 프로필 이미지를 수집합니다.
      </div>
    </div>
  );
}
