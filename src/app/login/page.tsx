import { Metadata } from 'next';
import Image from 'next/image';

import { GoogleLoginButton } from '@/features/auth/by-google';
import PixxelLogoWithText from '~/public/images/pixxel-logo-with-text.png';
import { DefaultLink } from '@/shared/ui/default-link';
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
      <div className={styles.logoArea}>
        <Image src={PixxelLogoWithText} alt="Pixxel Game" height={40} />
      </div>
      <div className={styles.description}>
        소셜 로그인으로 간편하게 시작하세요
      </div>
      <div className={styles.socialLoginArea}>
        <GoogleLoginButton />
      </div>
      <div className={styles.terms}>
        로그인 시{' '}
        <strong className={styles.termsStrongText}>서비스 이용약관</strong>과{' '}
        <DefaultLink
          href="/policy/privacy"
          className={styles.policyLink}
          target="_blank"
        >
          개인정보 수집 및 이용
        </DefaultLink>
        에 동의하는 것으로 간주됩니다.
      </div>
    </div>
  );
}
