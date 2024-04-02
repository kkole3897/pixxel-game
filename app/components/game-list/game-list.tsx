import * as styles from './game-list.css';
import { composeClassNames } from '@/src/shared/lib/react/compose-class-name';

export function GameList({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>) {
  const composedClassName = composeClassNames(styles.gameList, className);

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
  const composedClassName = composeClassNames(styles.gameListItem, className);

  return (
    <li className={composedClassName} {...props}>
      {children}
    </li>
  );
}

GameList.Item = GameListItem;
