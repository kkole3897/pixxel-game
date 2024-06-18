'use client';

import cn from 'classnames';

import {
  useGetBestGamePriceHistoryQuery,
  GamePriceHistoryChart,
} from '@/entities/game';
import * as styles from './price-history-fetcher.css';

interface PriceHistoryFetcherProps {
  className?: string;
  gamePublicId: string;
}

export default function PriceHistoryContainer({
  className,
  gamePublicId,
}: PriceHistoryFetcherProps) {
  const { isPending, data, isError } =
    useGetBestGamePriceHistoryQuery(gamePublicId);

  const composedRootClassName = cn(className, styles.container);

  // TODO: 로딩, 에러 처리 구체화
  if (isPending) {
    return <div className={composedRootClassName}></div>;
  }

  if (isError) {
    return <div className={composedRootClassName}></div>;
  }

  return (
    <div className={composedRootClassName}>
      <GamePriceHistoryChart data={data} />
    </div>
  );
}
