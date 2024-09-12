import React from 'react';

import * as styles from './page-title.css';

export default function PageTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <h1 className={styles.title}>{children}</h1>;
}
