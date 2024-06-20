'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiHeartLine, RiLogoutBoxLine } from '@remixicon/react';

import { createClient } from '@/shared/lib/supabase/client';
import * as styles from './menu.css';

export default function Menu() {
  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    // TODO: 로그아웃 이후 revalidate 관련 처리 필요
    await supabase.auth.signOut();
    router.replace('/');
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuItem}>
        <Link href="/wishlist" className={styles.menuAction}>
          <RiHeartLine size={20} />찜 목록
        </Link>
      </div>
      <div className={styles.menuItem}>
        <button
          type="button"
          className={styles.menuAction}
          onClick={handleLogout}
        >
          <RiLogoutBoxLine size={20} />
          로그아웃
        </button>
      </div>
    </div>
  );
}
