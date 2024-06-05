'use client';

import {
  useGetBestPriceHistoryQuery,
  PriceHistoryChart,
} from '@/entities/game';

interface PriceHistoryFetcherProps {
  className?: string;
  gamePublicId: string;
}

export default function PriceHistoryContainer({
  className,
  gamePublicId,
}: PriceHistoryFetcherProps) {
  const { isPending, data, isError } =
    useGetBestPriceHistoryQuery(gamePublicId);

  if (isPending) {
    return <div className={className}>로딩 중...</div>;
  }

  if (isError) {
    return <div className={className}>에러</div>;
  }

  return (
    <div className={className}>
      <PriceHistoryChart data={data} />
    </div>
  );
}
