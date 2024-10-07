import dayjs from '@/shared/lib/dayjs';

export function formatRequestTime(time: string): string {
  const result = dayjs(time).tz().format('YYYY.MM.DD HH:mm:ss');

  return result;
}
