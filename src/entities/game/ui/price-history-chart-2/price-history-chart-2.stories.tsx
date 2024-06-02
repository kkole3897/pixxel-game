import type { Meta, StoryObj } from '@storybook/react';

import PriceHistoryChart2 from './price-history-chart-2';

const meta: Meta<typeof PriceHistoryChart2> = {
  title: 'Entities/Game/PriceHistoryChart2',
  component: PriceHistoryChart2,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PriceHistoryChart2>;

export const Example: Story = {};
