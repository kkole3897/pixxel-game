'use client';

import {
  useGetBestGamePriceHistoryQuery,
  GamePriceHistoryChart,
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
    useGetBestGamePriceHistoryQuery(gamePublicId);

  if (isPending) {
    return <div className={className}>로딩 중...</div>;
  }

  if (isError) {
    return <div className={className}>에러</div>;
  }

  return (
    <div className={className}>
      <GamePriceHistoryChart data={data} />
    </div>
  );
}
