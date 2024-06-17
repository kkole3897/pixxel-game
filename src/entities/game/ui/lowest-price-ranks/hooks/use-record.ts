import dayjs from 'dayjs';

import type { Record } from '../types';

const storeTextMap = {
  steam: '스팀',
  epic: '에픽',
};

export function useRecord(record: Record) {
  const storeText = storeTextMap[record.gameCatalog.store];
  const datetimeText = dayjs(record.startAt).format('YY.MM.DD');
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
