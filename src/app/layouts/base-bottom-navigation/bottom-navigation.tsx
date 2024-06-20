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

import { usePrevPageStore } from '@/features/restore-prev-page';
import * as style from './bottom-navigation.css';

export default function BottomNavigation() {
  const pathname = usePathname();

  const { setPathname } = usePrevPageStore((state) => state);
  const handleClickMe = () => {
    setPathname(pathname);
  };

  return (
    <nav className={style.bottomNav}>
      <Link href="/" className={style.navItem({ active: pathname === '/' })}>
        {pathname === '/' ? (
          <RiHome2Fill size={20} />
        ) : (
          <RiHome2Line size={20} />
        )}
        <span className={style.navLabel}>홈</span>
      </Link>
      <Link
        href="/wishlist"
        className={style.navItem({ active: pathname === '/wishlist' })}
      >
        {pathname === '/wishlist' ? (
          <RiHeartFill size={20} />
        ) : (
          <RiHeartLine size={20} />
        )}
        <span className={style.navLabel}>찜</span>
      </Link>
      <Link
        href="/me"
        className={style.navItem({ active: pathname?.startsWith('/me') })}
        onClick={handleClickMe}
      >
        {pathname?.startsWith('/me') ? (
          <RiUser3Fill size={20} />
        ) : (
          <RiUser3Line size={20} />
        )}
        <span className={style.navLabel}>Me</span>
      </Link>
    </nav>
  );
}
