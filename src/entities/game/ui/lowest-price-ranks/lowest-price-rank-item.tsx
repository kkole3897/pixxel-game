import cn from 'classnames';
import { RiVipCrown2Fill } from '@remixicon/react';

import type { Record } from './types';
import * as styles from './lowest-price-rank-item.css';
import { useRank } from './hooks/use-price-ranks';
import { useRecord } from './hooks/use-record';

export type LowestPriceRankItemProps = {
  record: Record;
  /**
   * @default 1
   */
  rank?: number;
  className?: string;
};

export default function LowestPriceRankItem({
  record,
  className,
  ...props
}: LowestPriceRankItemProps) {
  const { rank = 1 } = props;

  const { normalizedRank, rankText } = useRank(rank);
  const { priceText, storeText, datetimeText } = useRecord(record);

  const composedRootClassName = cn(className, styles.rankItem);

  return (
    <div className={composedRootClassName}>
      <span className={styles.iconArea({ rank: normalizedRank })}>
        <RiVipCrown2Fill size="18" color="currentColor" />
      </span>
      <span>{rankText}</span>
      <span className={styles.price({ rank: normalizedRank })}>
        {priceText}
      </span>
      <span>{`(${storeText} | ${datetimeText})`}</span>
    </div>
  );
}
