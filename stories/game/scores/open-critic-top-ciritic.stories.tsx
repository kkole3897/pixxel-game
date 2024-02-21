import type { Meta, StoryObj } from '@storybook/react';

import { TopCritic } from '@/app/game/[gameId]/components/game-scores/open-critic';

const meta: Meta<typeof TopCritic> = {
  component: TopCritic,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TopCritic>;

export const Mighty: Story = {
  args: {
    score: 90,
    tier: 'Mighty',
  },
};

export const Strong: Story = {
  args: {
    score: 80,
    tier: 'Strong',
  },
};

export const Fair: Story = {
  args: {
    score: 50,
    tier: 'Fair',
  },
};

export const Weak: Story = {
  args: {
    score: 30,
    tier: 'Weak',
  },
};
