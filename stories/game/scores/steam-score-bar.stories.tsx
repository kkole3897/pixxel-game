import type { Meta, StoryObj } from '@storybook/react';

import { ScoreBar } from '@/app/game/[gameId]/components/game-scores/steam';

const meta: Meta<typeof ScoreBar> = {
  component: ScoreBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScoreBar>;

export const OverwhelminglyPositive: Story = {
  args: {
    positive: 475,
    totalCount: 500,
  },
};

export const VeryPositive: Story = {
  args: {
    positive: 80,
    totalCount: 100,
  },
};

export const MostlyPositive: Story = {
  args: {
    positive: 70,
    totalCount: 100,
  },
};

export const Positive: Story = {
  args: {
    totalCount: 49,
    positive: 40,
  },
};

export const Mixed: Story = {
  args: {
    positive: 40,
    totalCount: 100,
  },
};

export const Negative: Story = {
  args: {
    totalCount: 49,
    positive: 9,
  },
};

export const MostlyNegative: Story = {
  args: {
    positive: 20,
    totalCount: 100,
  },
};

export const VeryNegative: Story = {
  args: {
    positive: 19,
    totalCount: 100,
  },
};

export const OverwhelminglyNegative: Story = {
  args: {
    positive: 99,
    totalCount: 500,
  },
};
