import type { Meta, StoryObj } from '@storybook/react';

import Rating from './rating';

const meta: Meta<typeof Rating> = {
  title: 'Entities/Game/OpenCritic/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Mighty: Story = {
  args: {
    tier: 'Mighty',
  },
};

export const Strong: Story = { args: { tier: 'Strong' } };

export const Fair: Story = { args: { tier: 'Fair' } };

export const Weak: Story = { args: { tier: 'Weak' } };
