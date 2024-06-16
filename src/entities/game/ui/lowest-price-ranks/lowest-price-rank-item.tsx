'use client';

import {
  type GamePriceHistoryRecord,
  type GameCatalogItem,
} from '../../model/';
import cn from 'classnames';
import { RiVipCrown2Fill } from '@remixicon/react';

import * as styles from './lowest-price-rank-item.css';

export type LowestPriceRankItemProps = {
  record: Pick<GamePriceHistoryRecord, 'currentPrice' | 'startAt'> & {
    gameCatalog: Pick<GameCatalogItem, 'store'>;
  };
  className?: string;
};

export default function LowestPriceRankItem({
  record,
  className,
}: LowestPriceRankItemProps) {
  const composedRootClassName = cn(className, styles.rankItem);

  return (
    <div className={composedRootClassName}>
      <span className={styles.iconArea()}>
        <RiVipCrown2Fill size="18" color="currentColor" />
      </span>
      <span>1st</span>
      <span className={styles.price()}>{record.currentPrice}</span>
      <span>{'(스팀 | 20.05.11)'}</span>
    </div>
  );
}
