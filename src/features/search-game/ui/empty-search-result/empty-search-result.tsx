import cn from 'classnames';

import { RightArrowLink } from '@/shared/ui/right-arrow-link';
import * as styles from './empty-search-result.css';

type EmptySearchResultProps = {
  className?: string;
};

export default function EmptySearchResult({
  className,
}: EmptySearchResultProps) {
  const composedClassName = cn(className, styles.container);

  return (
    <div className={composedClassName}>
      <div>검색 결과가 없습니다.</div>
      <div className={styles.linkArea}>
        <RightArrowLink href="/request-new-game">
          신규 게임 요청하기
        </RightArrowLink>
      </div>
    </div>
  );
}
