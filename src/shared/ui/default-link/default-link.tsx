import Link, { type LinkProps } from 'next/link';
import cn from 'classnames';

import * as styles from './default-link.css';

export default function GameLink({
  href,
  children,
  className,
  ...props
}: React.PropsWithChildren<
  LinkProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
>) {
  const composedClassName = cn(styles.link, className);

  return (
    <Link href={href} className={composedClassName} {...props}>
      {children}
    </Link>
  );
}
