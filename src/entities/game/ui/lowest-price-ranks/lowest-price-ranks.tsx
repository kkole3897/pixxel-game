import cn from 'classnames';

import * as styles from './lowest-price-ranks.css';

type LowestPriceRanksProps = React.PropsWithChildren<{
  className?: string;
}>;

export default function LowestPriceRanks({
  children,
  className,
}: LowestPriceRanksProps) {
  const composedRootClassName = cn(className, styles.ranks);

  return <div className={composedRootClassName}>{children}</div>;
}
