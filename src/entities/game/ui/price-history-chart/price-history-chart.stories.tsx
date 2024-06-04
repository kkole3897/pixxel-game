import type { Meta, StoryObj } from '@storybook/react';

import PriceHistoryChart from './price-history-chart';

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
      { startAt: '2024-05-01', price: 10000 },
      { startAt: '2024-05-03', price: 9000 },
      { startAt: '2024-05-07', price: 7000 },
      { startAt: '2024-06-01', price: 10000 },
      { startAt: '2024-06-02', price: 10000 },
    ],
  },
};

export const OverDateRangeLimit: Story = {
  args: {
    data: [
      { startAt: '2024-01-01', price: 9000 },
      { startAt: '2024-05-01', price: 10000 },
      { startAt: '2024-05-03', price: 9000 },
      { startAt: '2024-05-07', price: 7000 },
      { startAt: '2024-06-01', price: 10000 },
      { startAt: '2024-06-02', price: 10000 },
    ],
  },
};
