'use client';

import Link from 'next/link';
import { RiHeartLine, RiLogoutBoxLine } from '@remixicon/react';

import { logout } from '@/features/auth/logout';
import * as styles from './menu.css';

export default function Menu() {
  const handleLogout = async () => {
    await logout();
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
