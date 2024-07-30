import cn from 'classnames';

import * as styles from './dlc-badge.css';

type DlcBadgeProps = {
  className?: string;
};

export default function DlcBadge({ className }: DlcBadgeProps) {
  const composedRootClassName = cn(styles.badge, className);

  return <div className={composedRootClassName}>DLC</div>;
}
