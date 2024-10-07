import React from 'react';
import Link from 'next/link';
import { RiArrowRightSLine } from '@remixicon/react';
import cn from 'classnames';

import * as styles from './right-arrow-link.css';

type RightArrowLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export default function RightArrowLink({
  children,
  className,
  ...props
}: RightArrowLinkProps) {
  const composedClassName = cn(className, styles.link);

  return (
    <Link {...props} className={composedClassName}>
      <span>{children}</span>
      <RiArrowRightSLine className={styles.icon} />
    </Link>
  );
}
