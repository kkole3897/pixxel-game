import { KakaoLoginButton } from '@/features/auth/by-kakao';
import * as styles from './page.css';

export default function LoginPage() {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.logoArea}>Pixxel Gamez</div>
      <div>소셜 로그인으로 간편하게 시작하세요</div>
      <div className={styles.socialLoginArea}>
        <KakaoLoginButton />
      </div>
    </div>
  );
}
