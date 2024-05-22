'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  RiHome2Line,
  RiHome2Fill,
  RiHeartLine,
  RiHeartFill,
  RiUser3Line,
  RiUser3Fill,
} from '@remixicon/react';

import * as style from './bottom-navigation.css';

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className={style.bottomNav}>
      <Link href="/" className={style.navItem}>
        {pathname === '/' ? <RiHome2Fill /> : <RiHome2Line />}
        <span className={style.navLabel}>홈</span>
      </Link>
      <Link href="/wishlist" className={style.navItem}>
        {pathname === '/wishlist' ? <RiHeartFill /> : <RiHeartLine />}
        <span className={style.navLabel}>찜</span>
      </Link>
      <Link href="/me" className={style.navItem}>
        {pathname?.startsWith('/me') ? <RiUser3Fill /> : <RiUser3Line />}
        <span className={style.navLabel}>me</span>
      </Link>
    </nav>
  );
}
