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
      <div>소셜 로그인으로 간편하게 시작하세요</div>
      <div className={styles.socialLoginArea}>
        <GoogleLoginButton />
      </div>
    </div>
  );
}
