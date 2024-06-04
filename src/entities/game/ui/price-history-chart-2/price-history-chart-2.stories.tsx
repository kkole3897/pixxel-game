import type { Meta, StoryObj } from '@storybook/react';

import PriceHistoryChart2 from './price-history-chart-2';

const meta: Meta<typeof PriceHistoryChart2> = {
  title: 'Entities/Game/PriceHistoryChart2',
  component: PriceHistoryChart2,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PriceHistoryChart2>;

export const WithinDateRangeLimit: Story = {
  args: {
    data: [
      { date: '2024-05-01', price: 10000 },
      { date: '2024-05-03', price: 9000 },
      { date: '2024-05-07', price: 7000 },
      { date: '2024-06-01', price: 10000 },
      { date: '2024-06-02', price: 10000 },
    ],
  },
};

export const OverDateRangeLimit: Story = {
  args: {
    data: [
      { date: '2024-01-01', price: 9000 },
      { date: '2024-05-01', price: 10000 },
      { date: '2024-05-03', price: 9000 },
      { date: '2024-05-07', price: 7000 },
      { date: '2024-06-01', price: 10000 },
      { date: '2024-06-02', price: 10000 },
    ],
  },
};
