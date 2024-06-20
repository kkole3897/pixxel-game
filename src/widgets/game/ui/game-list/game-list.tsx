import cn from 'classnames';

import * as styles from './game-list.css';

export function GameList({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>) {
  const composedClassName = cn(styles.gameList, className);

  return (
    <ol className={composedClassName} {...props}>
      {children}
    </ol>
  );
}

function GameListItem({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>) {
  const composedClassName = cn(styles.gameListItem, className);

  return (
    <li className={composedClassName} {...props}>
      {children}
    </li>
  );
}

GameList.Item = GameListItem;
