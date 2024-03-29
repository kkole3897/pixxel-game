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
  const isAuth = false;
  const mypageUrl = isAuth ? '/user/1' : '/login';

  return (
    <nav className={style.bottomNav}>
      <Link href="/" className={style.navItem}>
        {pathname === '/' ? <RiHome2Fill /> : <RiHome2Line />}
        <span className={style.navLabel}>홈</span>
      </Link>
      <Link href="/wish" className={style.navItem}>
        {pathname === '/wish' ? <RiHeartFill /> : <RiHeartLine />}
        <span className={style.navLabel}>찜</span>
      </Link>
      <Link href={mypageUrl} className={style.navItem}>
        {pathname.startsWith('/user') ? <RiUser3Fill /> : <RiUser3Line />}
        <span className={style.navLabel}>마이페이지</span>
      </Link>
    </nav>
  );
}
