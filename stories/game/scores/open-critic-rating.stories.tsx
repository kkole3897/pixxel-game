import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from '@/app/game/[gameId]/components/game-scores/open-critic';

const meta: Meta<typeof Rating> = {
  component: Rating,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Mighty: Story = {
  args: {
    tier: 'Mighty',
  }
};

export const Strong: Story = { args: { tier: 'Strong' }};

export const Fair: Story = { args:{tier: 'Fair'}};

export const Weak: Story = { args: {tier: 'Weak'}};
