import type { Meta, StoryObj } from '@storybook/react';

import PriceHistoryChart from './price-history-chart';
import dayjs from '@/shared/lib/dayjs';

const meta: Meta<typeof PriceHistoryChart> = {
  title: 'Entities/Game/PriceHistoryChart',
  component: PriceHistoryChart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PriceHistoryChart>;

export const WithinDateRangeLimit: Story = {
  args: {
    data: [
      { startAt: '2024-05-01 00:00:00+00', price: 10000 },
      { startAt: '2024-05-03 00:00:00+00', price: 9000 },
      { startAt: '2024-05-07 00:00:00+00', price: 7000 },
      { startAt: '2024-06-01 00:00:00+00', price: 10000 },
      { startAt: '2024-06-02 00:00:00+00', price: 10000 },
    ],
  },
};

export const OverDateRangeLimit: Story = {
  args: {
    data: [
      { startAt: '2024-01-08 00:00:00+00', price: 9000 },
      { startAt: '2024-05-01 00:00:00+00', price: 10000 },
      { startAt: '2024-05-03 00:00:00+00', price: 9000 },
      { startAt: '2024-05-07 00:00:00+00', price: 7000 },
      { startAt: '2024-06-01 00:00:00+00', price: 10000 },
      { startAt: '2024-06-02 00:00:00+00', price: 10000 },
      { startAt: '2024-08-28 00:00:00+00', price: 10000 },
    ],
  },
};

const generateDates = (startDate: string, endDate: string, price: number) => {
  const result = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    result.push({
      startAt: currentDate.toISOString().split('.')[0] + '+00:00',
      price,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
};

export const DenseDates: Story = {
  args: {
    data: generateDates(
      '2024-08-01 00:00:00+00',
      '2024-10-09 00:00:00+00',
      10000
    ),
  },
};

export const OnlyCurrentTime: Story = {
  args: {
    data: [{ startAt: dayjs().toISOString(), price: 10000 }],
  },
};

export const DiffWithinDay: Story = {
  args: {
    data: [
      { startAt: dayjs().subtract(1, 'hours').toISOString(), price: 10000 },
      { startAt: dayjs().toISOString(), price: 10000 },
    ],
  },
};

export const DiffOverDay: Story = {
  args: {
    data: [
      { startAt: dayjs().subtract(1, 'days').toISOString(), price: 10000 },
      { startAt: dayjs().toISOString(), price: 10000 },
    ],
  },
};
