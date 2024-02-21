import type { Meta, StoryObj } from '@storybook/react';

import { RecommendPercent } from '@/app/game/[gameId]/components/game-scores/open-critic';

const meta: Meta<typeof RecommendPercent> = {
  component: RecommendPercent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecommendPercent>;

export const Mighty: Story = {
  args: {
    percent: 91,
    tier: 'Mighty',
  },
};

export const Strong: Story = {
  args: {
    percent: 82,
    tier: 'Strong',
  },
};

export const Fair: Story = {
  args: {
    percent: 68,
    tier: 'Fair',
  },
};

export const Weak: Story = {
  args: {
    percent: 32,
    tier: 'Weak',
  },
};
