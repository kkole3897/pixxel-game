import type { Meta, StoryObj } from '@storybook/react';

import StoreSelect from './store-select';

const meta: Meta = {
  title: 'Features/RequestNewGame/StoreSelect',
  component: StoreSelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StoreSelect>;

export const Steam: Story = {
  args: {
    value: 'steam',
  },
};

export const Epic: Story = {
  args: {
    value: 'epic',
  },
};
