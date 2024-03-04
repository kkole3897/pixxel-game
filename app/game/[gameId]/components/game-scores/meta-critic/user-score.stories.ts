import type { Meta, StoryObj } from '@storybook/react';

import UserScore from './user-score';

const meta: Meta<typeof UserScore> = {
  title: 'App/Game/[GameId]/GameScores/MetaCritic/UserScore',
  component: UserScore,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserScore>;

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

export const Bad: Story = {
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
    score: -1,
  },
};
