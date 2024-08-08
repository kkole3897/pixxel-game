import dayjs from '@/shared/lib/dayjs';
import type { Record } from '../types';

const storeTextMap = {
  steam: '스팀',
  epic: '에픽',
};

export function useRecord(record: Record) {
  const storeText = storeTextMap[record.store];
  const datetimeText = dayjs(record.startAt).tz().format('YY.MM.DD');
  const priceText =
    record.currentPrice === 0
      ? 'Free'
      : `${record.currentPrice.toLocaleString()}원`;

  return {
    storeText,
    datetimeText,
    priceText,
  };
}
