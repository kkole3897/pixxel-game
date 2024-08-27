import cn from 'classnames';

import * as styles from './empty-search-result.css';

type EmptySearchResultProps = {
  className?: string;
};

export default function EmptySearchResult({
  className,
}: EmptySearchResultProps) {
  const composedClassName = cn(className, styles.container);

  return <div className={composedClassName}>검색 결과가 없습니다.</div>;
}
