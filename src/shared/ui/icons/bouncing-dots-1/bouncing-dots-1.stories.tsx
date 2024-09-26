import type { Meta, StoryObj } from '@storybook/react';

import BouncingDots1 from './bouncing-dots-1';

const meta: Meta = {
  title: 'Shared/Icons/BouncingDots1',
  component: BouncingDots1,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BouncingDots1>;

export const Default: Story = {};

export const Red: Story = {
  args: {
    color: 'red',
  },
};
