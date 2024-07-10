import Link from 'next/link';
import { RiArrowRightSLine } from '@remixicon/react';
import cn from 'classnames';

import * as styles from './empty-wish-list-guide.css';

type EmptyWishListGuideProps = {
  className?: string;
};

export default function EmptyWishListGuide({
  className,
}: EmptyWishListGuideProps) {
  const composedRootClassName = cn(className, styles.container);

  return (
    <div className={composedRootClassName}>
      <div className={styles.description}>찜한 게임이 없습니다.</div>
      <div className={styles.linkArea}>
        <Link href="/" className={styles.link}>
          <span>둘러보기</span>
          <RiArrowRightSLine />
        </Link>
      </div>
    </div>
  );
}
