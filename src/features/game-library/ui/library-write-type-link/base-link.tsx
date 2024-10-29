import Link from 'next/link';

import * as styles from './base-link.css';

type DefaultLinkType = React.PropsWithChildren<{
  href: string;
}>;

export default function DefaultLink({ children, ...props }: DefaultLinkType) {
  return (
    <Link {...props} className={styles.link}>
      {children}
    </Link>
  );
}
