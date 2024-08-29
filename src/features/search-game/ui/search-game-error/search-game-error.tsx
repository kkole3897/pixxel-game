import cn from 'classnames';

import * as styles from './search-game-error.css';

type SearchGameErrorProps = {
  className?: string;
};

export default function SearchGameError({ className }: SearchGameErrorProps) {
  const composedClassName = cn(className, styles.container);

  return <div className={composedClassName}>검색 중 오류가 발생했습니다.</div>;
}
