import Link, { type LinkProps } from 'next/link';

import * as styles from './default-link.css';
import { composeClassNames } from '@/shared/lib/react';

export default function GameLink({
  href,
  children,
  className,
  ...props
}: React.PropsWithChildren<
  LinkProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
>) {
  const composedClassName = composeClassNames(styles.link, className);

  return (
    <Link href={href} className={composedClassName} {...props}>
      {children}
    </Link>
  );
}
