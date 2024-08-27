import cn from 'classnames';

import * as styles from './search-game-list.css';

export function SearchGameList({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>) {
  const composedClassName = cn(className, styles.searchGameList);

  return (
    <ol className={composedClassName} {...props}>
      {children}
    </ol>
  );
}

function SearchGameListItem({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>) {
  const composedClassName = cn(className, styles.searchGameListItem);

  return (
    <li className={composedClassName} {...props}>
      {children}
    </li>
  );
}

SearchGameList.Item = SearchGameListItem;
