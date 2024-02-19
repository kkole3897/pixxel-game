import type { Meta, StoryObj } from '@storybook/react';

import { PriceHistoryChart } from '@/app/game/[gameId]/components/price-history-chart';

const meta: Meta<typeof PriceHistoryChart> = {
  component: PriceHistoryChart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PriceHistoryChart>;

export const Example: Story = {
  args: {
    history: [
      { date: '2024-02-01', steam: 68000 },
      { date: '2024-02-02', steam: 68000 },
      { date: '2024-02-03', steam: 58000 },
      { date: '2024-02-04', steam: 58000 },
      { date: '2024-02-05', steam: 58000 },
      { date: '2024-02-06', steam: 48000 },
      { date: '2024-02-07', steam: 68000 },
      { date: '2024-02-08', steam: 68000 },
      { date: '2024-02-09', steam: 68000 },
      { date: '2024-02-10', steam: 68000 },
      { date: '2024-02-11', steam: 68000 },
      { date: '2024-02-12', steam: 58000 },
      { date: '2024-02-13', steam: 58000 },
      { date: '2024-02-14', steam: 68000 },
      { date: '2024-02-15', steam: 68000 },
      { date: '2024-02-16', steam: 68000 },
      { date: '2024-02-17', steam: 68000 },
      { date: '2024-02-18', steam: 68000 },
    ],
  },
};
