import cn from 'classnames';

import { RightArrowLink } from '@/shared/ui/right-arrow-link';
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
        <RightArrowLink href="/">둘러보기</RightArrowLink>
      </div>
    </div>
  );
}
