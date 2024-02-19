import type { Meta, StoryObj } from '@storybook/react';

import { MetaScore } from '@/app/game/[gameId]/components/game-scores/meta-critic';

const meta: Meta<typeof MetaScore> = {
  component: MetaScore,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MetaScore>;

export const Best: Story = {
  args: {
    score: 90,
  },
};

export const Good: Story = {
  args: {
    score: 75,
  },
};

export const Normal: Story = {
  args: {
    score: 50,
  },
};

export const Worse: Story = {
  args: {
    score: 20,
  },
};

export const Worst: Story = {
  args: {
    score: 0,
  },
};

export const TBD: Story = {
  args: {
    score: -1
  },
};
